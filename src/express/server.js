require('dotenv').config();
const express = require('express');
const { taskController } = require('./controllers/tasks/express');
const { logger, levels } = require('../utils/logger');
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = process.env.BACKEND_PORT || 8080;
const expressLogger = logger('Express');

const cors = require('cors');
app.use(cors({
	origin: process.env.CLIENT_URI || 'http://localhost:3000',
	credentials: true,
}));

app.use('/tasks', taskController);
app.use((req, res, next) => {
  req.logger = expressLogger;
  next();
})

server.listen(port, () => {
  expressLogger(`Sever Starting...`)
  expressLogger(`Port: ${port}`);
});
