import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import createToken from '../helpers/token';

const login = async (req: Request, res: Response) => {
  try {
    const token = createToken(req.body);
    res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default { login };
