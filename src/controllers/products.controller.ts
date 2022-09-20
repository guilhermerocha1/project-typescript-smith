import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import productsService from '../services/products.service';

const getAll = async (_req: Request, res: Response) => {
  try {
    const result = await productsService.getAll();
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const result = await productsService.create(req.body);
    res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

export default { getAll, create };
