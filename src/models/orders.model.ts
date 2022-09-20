import Orders from '../interfaces/orders.interface';
import connection from './connection';

const getAll = async (): Promise<Orders[]> => {
  const [result] = await connection.execute(`
  SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds 
  FROM Trybesmith.Orders AS o
  INNER JOIN Trybesmith.Products AS p
  ON p.orderId = o.id
  GROUP BY o.id
  ORDER BY o.userId;`);
  return result as Orders[];
};

export default { getAll };