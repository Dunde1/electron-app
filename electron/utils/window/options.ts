import { BrowserWindowConstructorOptions } from 'electron';
import isDev from 'electron-is-dev';

const commons: BrowserWindowConstructorOptions = {
  webPreferences: {
    nodeIntegration: true,
    devTools: isDev,
  },
};

const initial: BrowserWindowConstructorOptions = {
  width: 800,
  height: 600,
  ...commons,
};

const browserWindowOptions = { initial };

export type WindowOptionNames = keyof typeof browserWindowOptions;

export default browserWindowOptions;
