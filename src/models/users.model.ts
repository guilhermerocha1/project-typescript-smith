import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/users.interface';
import connection from './connection';

const create = async (user: User): Promise<ResultSetHeader> => {
  const { username, classe, level, password } = user;
  const [newUser] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  return newUser;
};

export default { create };