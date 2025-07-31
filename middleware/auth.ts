import { NextApiRequest, NextApiResponse } from 'next';
import { getTokenFromHeader, verifyToken } from '../lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const withAuth = (handler: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Get token from header
      const token = getTokenFromHeader(req);
      
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }

      // Verify token
      const decoded = verifyToken(token);

      // Get user from database
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      });

      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      // Add user to request object
      req.user = user;

      return handler(req, res);
    } catch (error) {
      console.error('Authentication error:', error);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
};

// Extend the NextApiRequest type to include user
declare module 'next' {
  interface NextApiRequest {
    user?: {
      id: string;
      name: string | null;
      email: string;
      role: string;
    };
  }
}
