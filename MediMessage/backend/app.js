// MongoDB Password: GcVA2XR9IHC9SB49

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts')

const Post = require('./models/post');
const app = express();

mongoose.connect(
  'mongodb+srv://Max:GcVA2XR9IHC9SB49@cluster0-um81s.mongodb.net/node-angular?retryWrites=true'
  )
  .then(() => {
    console.log('Connected To Database!');
  })
  .catch(() => {
    consol.log('Connection Failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts',postsRoutes);

module.exports = app;
