import { ResultSetHeader } from 'mysql2';
import Products from '../interfaces/products.interface';
import connection from './connection';

const getAll = async (): Promise<Products[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return result as Products[];
};

const create = async (products: Products): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [products.name, products.amount],
  );
  return result;
};

export default { create, getAll };