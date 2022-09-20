import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import ordersService from '../services/orders.service';

const getAll = async (_req: Request, res: Response) => {
  try {
    const result = await ordersService.getAll();
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default { getAll };