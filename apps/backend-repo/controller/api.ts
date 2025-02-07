import { Request, Response } from 'express';
import { fetchUserData, updateUserData } from '../repository/userCollection';
import { User } from '../entities/user';

export const getUserData = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const user = await fetchUserData(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).send('Error fetching user data');
  }
};

export const putUserData = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const userData: User = req.body;
  try {
    await updateUserData(userId, userData);
    return res.status(200).send('User data updated successfully');
  } catch (error) {
    return res.status(500).send('Error updating user data');
  }
};