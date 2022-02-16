require('dotenv').config();

const { taskClient } = require('./controllers/tasks/db');

/**
 *        Electron Client API -- Broken Currently
 */
exports.api = {
  tasks: taskClient,
}

exports.actions = require('./actions').actions;
