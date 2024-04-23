/** @format */

import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGODB_CONECTION!)
  .then(() => console.log('Conected to MongoDB '));

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
