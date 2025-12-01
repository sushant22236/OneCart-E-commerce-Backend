import express from 'express';
import { connectDB } from './config/db.connection.js';
const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


export default app;