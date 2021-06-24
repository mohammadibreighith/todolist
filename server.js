const express = require('express');
const cors = require('cors');
const app = express();
// const fs = require('fs');
// const Pool = require('pg').Pool;

// const pool = new Pool();
// var sql = fs.readFileSync('./DB/database.sql').toString();

app.set('trust proxy', true);

app.use(cors());

const todoRoute = require('./routes/todolist');

app.use(express.json());

app.use('/todolist', todoRoute);

// console.log(sql);
// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   client.query('SELECT FROM pg_database WHERE datname = tododb', (err, result) => {
//     release();
//     if (err) {
//       return console.error('Error executing query', err.stack);
//     }
//     console.log(result.rows);
//   });
// });

app.listen(3100);
