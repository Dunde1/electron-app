import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev,
    },
  });

  const startURL = isDev ? 'http://localhost:3000/' : `file://${path.resolve(__dirname, '../build-react/index.html')}`;

  mainWindow.loadURL(startURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
  app.exit(0);
});
