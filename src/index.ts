// import * as dotenv from 'dotenv';
import app from './app';

// dotenv.config();

// const { PORT } = process.env || 3000;
const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
