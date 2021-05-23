import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import api from './routes/api.js';
import { port, database } from './config.js';

const app = express();

mongoose.connect(database, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.info('Connection successfully to mongoDB');
});

app.use(cors());
app.use(express.json());

app.use('/', api);
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
