const { Router } = require('express');
const { taskClient } = require('./db');
const controller = Router();

controller.get('/', (req, res, next) => {
  taskClient.getTasks()
    .then((tasks) => {
      res.send(tasks);
      // res.sendStatus(200);
    })
    .catch((err) => {
      req.logger(err);
      res.sendStatus(500);
    });
});

exports.taskController = controller;
