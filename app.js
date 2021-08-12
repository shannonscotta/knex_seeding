// app.js

//const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')({client: 'postgresql', connection: {host: '127.0.0.1', port:5432, user:'postgres', password:'docker', database:'sdisomething'}});
// const knex = require('knex')('production') //from git


app.use(express.json());
app.use(express.urlencoded( {extended:true} ));

app.get('/movies', function(req, res) {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});