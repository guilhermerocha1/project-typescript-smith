import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProducts from '../middlewares/products.middleware';

const router = Router();

const { validateProductsName, validateProductsAmount } = validateProducts;

router.get('/products', productsController.getAll);
router.post('/products', validateProductsName, validateProductsAmount, productsController.create);

export default router;
