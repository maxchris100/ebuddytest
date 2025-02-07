import express from 'express';
import { router as userRoutes } from '../routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

export { app };