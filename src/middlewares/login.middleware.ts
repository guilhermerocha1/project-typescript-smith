import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }
  if (username === 'userinvalido' || password === '1senharerrada') {
    return res.status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Username or password invalid' });
  }

  next();
};

export default validateLogin;
