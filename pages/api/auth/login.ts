import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as yup from 'yup';
import * as jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Validation schema for login
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate request body
    await loginSchema.validate(req.body, { abortEarly: false });

    const { email, password } = req.body;

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    // Omit password from response
    const { password: _, ...userWithoutPassword } = user;

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: userWithoutPassword,
    });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      // Handle validation errors
      const errors = error.inner.map((err) => ({
        path: err.path,
        message: err.message,
      }));
      return res.status(400).json({ message: 'Validation failed', errors });
    }
    
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
