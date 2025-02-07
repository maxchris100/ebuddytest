import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';

export const fetchUserData = async (userId: string): Promise<User | null> => {
  const userDoc = await db.collection('USERS').doc(userId).get();
  return userDoc.exists ? (userDoc.data() as User) : null;
};

export const updateUserData = async (userId: string, userData: User): Promise<void> => {
  await db.collection('USERS').doc(userId).set(userData);
};