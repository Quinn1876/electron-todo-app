const db = require('../../db');

const getTasks = () => new Promise((resolve, reject) => {
  db.query('SELECT * FROM tasks', [], (err, data) => {
    if (err) {
      reject(err);
    } else if (data.rows) {
      resolve(data.rows);
    } else {
      resolve([]);
    }
  });
});

exports.taskClient = {
  getTasks,
};
