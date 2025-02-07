import { Router } from 'express';
import { getUserData, putUserData } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/:userId', authMiddleware, getUserData);
router.put('/:userId', authMiddleware, putUserData);

export { router };