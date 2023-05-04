import { app } from 'electron';
import createWindow from '@utils/window';

app.on('ready', createWindow.initial);

app.on('window-all-closed', () => {
  app.quit();
  app.exit(0);
});
