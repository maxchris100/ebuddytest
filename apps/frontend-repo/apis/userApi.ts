import { User } from './user';

const API_URL = 'http://localhost:5000/api/users';

export const fetchUserData = async (userId: string): Promise<User> => {
  const response = await fetch(`${API_URL}/${userId}`);
  if (!response.ok) {
    throw new Error('Error fetching user data');
  }
  return response.json();
};

export const updateUserData = async (userId: string, userData: User) => {
  const response = await fetch(`${API_URL}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Error updating user data');
  }
  return response.json();
};