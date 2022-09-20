import express from 'express';
import ProductsRouter from './routes/products.router';
import UserRouter from './routes/users.router';
import OrderRouter from './routes/orders.router';
import loginController from './controllers/login.controller';
import validateLogin from './middlewares/login.middleware';

const app = express();

app.use(express.json());
app.use(ProductsRouter);
app.use(UserRouter);
app.use(OrderRouter);
app.post('/login', validateLogin, loginController.login);

export default app;
