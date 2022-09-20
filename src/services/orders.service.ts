import ordersModel from '../models/orders.model';

const getAll = async () => {
  const result = await ordersModel.getAll();
  return result;
};

export default { getAll };