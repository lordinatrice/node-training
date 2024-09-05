// server.js

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db');
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log("coucou"+err)

    const db=database.db("sample_mflix")
    console.log("connected to database")

    require('./app/routes')(app, db);
    app.listen(port, () => {    console.log('We are live on ' + port);
  });
})

app.listen(port, () => {
  console.log('We are live on ' + port);
});
