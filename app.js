const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
// const { limiter } = require('./utils/rateLimiter');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT, DB_ADDRESS } = require('./config');

const app = express();

mongoose.connect(DB_ADDRESS);

app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use(limiter);
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
