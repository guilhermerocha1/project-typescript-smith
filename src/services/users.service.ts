import User from '../interfaces/users.interface';
import userModel from '../models/users.model';

const create = async (user: User) => {
  const { insertId } = await userModel.create(user);
  return { id: insertId, ...user };
};

export default { create };