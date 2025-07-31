import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as yup from 'yup';

const prisma = new PrismaClient();

// Validation schema for signup
const signupSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate request body
    await signupSchema.validate(req.body, { abortEarly: false });

    const { name, email, password, phone } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        role: 'USER', // Default role
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    return res.status(201).json({
      message: 'User created successfully',
      user,
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
    
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
