// app/page.tsx
import { Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { UpdateButton } from '../components/UpdateButton';

export default function HomePage() {
  const { successMessage, errorMessage } = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <Typography variant="h4">Welcome to the User Management App</Typography>
      <UpdateButton userId="123" userData={{ name: 'John Doe', email: 'john@example.com' }} />
      {successMessage && <Typography color="success">{successMessage}</Typography>}
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
    </Container>
  );
}
