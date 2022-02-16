require('dotenv').config();
const { app, BrowserWindow, ipcMain } = require('electron');
const { api, actions } = require('../src/api');
const path = require('path');

const createWindow = () => {
  // --------------------
  //  Bootstrap Frontend
  // --------------------
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });


  win.loadURL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`);
}

app.on('ready', createWindow);

/* Backend */
ipcMain.handle(actions.GET_TASKS,
  async (event, args) => api.tasks.getTasks()
);

