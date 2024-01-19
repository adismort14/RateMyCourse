const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose')

const authRoutes = require('./src/routes/auth.routes'); 
require('dotenv').config();

const url = process.env.MONGODB_URI;

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET_KEY, 
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.json());

app.use('/auth', authRoutes);

mongoose.connect(url)
  .then( () => {
      console.log('Connected to database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
  })

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
