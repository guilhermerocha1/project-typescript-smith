import { sign } from 'jsonwebtoken';

const JWT_SECRET = 'suasenhadificil';

interface Payload {
  username?: string;
  password?: string;
}

const token = (payload: Payload) =>
  sign(payload, JWT_SECRET, { expiresIn: '1d' });

export default token;
