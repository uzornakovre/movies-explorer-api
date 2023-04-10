require('dotenv').config();

const { JWT_SECRET = 'JWT_SECRET' } = process.env;
const { PORT = '3002' } = process.env;
const { DB_ADDRESS = 'mongodb://localhost:27017/movexpdb' } = process.env;
const { NODE_ENV } = process.env;

module.exports = {
  JWT_SECRET,
  PORT,
  DB_ADDRESS,
  NODE_ENV,
};
