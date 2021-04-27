const express = require('express');
const mongoose = require('mongoose');
const { port, database } = require('./config');

const app = express();

mongoose.connect(database, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.info('Connection successfully to mongoDB');
});

app.use(express.json());

const catalogRouter = require('./routes/catalog');

app.use('/', catalogRouter);
app.listen(port, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
