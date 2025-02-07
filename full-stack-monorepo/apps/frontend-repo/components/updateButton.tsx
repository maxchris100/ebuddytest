// components/UpdateButton.tsx
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../apis/userApi';
import { setLoading, setSuccess, setError } from '../store/actions';

export const UpdateButton = ({ userId, userData }: { userId: string, userData: any }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(setLoading(true));
    try {
      await updateUserData(userId, userData);
      dispatch(setSuccess('User data updated successfully'));
    } catch (error) {
      dispatch(setError('Failed to update user data'));
    }
    dispatch(setLoading(false));
  };

  return (
    <Button onClick={handleClick} variant="contained">
      Update User Data
    </Button>
  );
};
