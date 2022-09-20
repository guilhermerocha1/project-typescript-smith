import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/users.service';
import createToken from '../helpers/token';

const create = async (req: Request, res: Response) => {
  try {
    await userService.create(req.body);
    const token = createToken(req.body);
    res.status(StatusCodes.CREATED).json({ token });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default { create };