const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect().then(() => {
  console.log('Connected to PostgreSQL database');
}).catch((err) => {
  console.error('Error connecting to PostgreSQL database', err);
});

module.exports = client;