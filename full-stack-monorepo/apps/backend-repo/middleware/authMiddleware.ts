import { Request, Response, NextFunction } from 'express';
import firebaseAdmin from 'firebase-admin';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).send('Token is required');
  }

  firebaseAdmin
    .auth()
    .verifyIdToken(token)
    .then(() => {
      next();
    })
    .catch((error) => {
      return res.status(403).send('Invalid token');
    });
};