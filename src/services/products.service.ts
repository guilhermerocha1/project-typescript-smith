import Products from '../interfaces/products.interface';
import productsModel from '../models/products.model';

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const create = async (products: Products) => {
  const { insertId } = await productsModel.create(products);
  return { id: insertId, ...products };
};

export default { create, getAll };
