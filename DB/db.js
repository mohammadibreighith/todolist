// const Pool = require('pg').Pool;
var pg = require('pg');

require('dotenv').config();
// postgres://hnvgjbxnshndic:ab281687d3068f9e270a48a0e619f2601799fe460b8db808374d15dae8200a41@ec2-3-218-71-191.compute-1.amazonaws.com:5432/d7avave007bfbk
const devConfig = {
  user: 'hnvgjbxnshndic',
  password: 'ab281687d3068f9e270a48a0e619f2601799fe460b8db808374d15dae8200a41',
  host: 'ec2-3-218-71-191.compute-1.amazonaws.com',
  database: 'd7avave007bfbk',
  port: '5432',
  ssl: { rejectUnauthorized: false },
};
// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const proConfig = process.env.DATABASE_URL;

// const pool = new Pool({
//   connectionString: process.env.NODE_ENV === 'production' ? proConfig : devConfig,
// });
const client = new pg.Client(devConfig);
client.connect();

// console.log(pool);
console.log(devConfig);
console.log(proConfig);
// const pool = new Pool({
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
// });
module.exports = client;
