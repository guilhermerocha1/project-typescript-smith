import { Router } from 'express';
import userController from '../controllers/users.controller';
import validateUser from '../middlewares/users.middleware';

const router = Router();

const {
  validateUserUsername,
  validateUserClasse,
  validateUserLevel,
  validateUserPassword,
} = validateUser;

router.post(
  '/users',
  validateUserUsername,
  validateUserClasse,
  validateUserLevel,
  validateUserPassword,
  userController.create,
);

export default router;