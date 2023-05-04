import { BrowserWindow } from 'electron';
import browserWindowOptions, { WindowOptionNames } from './options';
import isDev from 'electron-is-dev';
import { REACT_HOST_ADDRESS } from '@const/url';
import { REACT_BUILD_INDEX_FILE_PATH } from '@const/path';

type CreateWindow = () => void;

const windows: Record<WindowOptionNames, BrowserWindow | null> = {
  initial: null,
};

const initial: CreateWindow = () => {
  windows.initial = new BrowserWindow(browserWindowOptions['initial']);

  const startURL = isDev ? REACT_HOST_ADDRESS : REACT_BUILD_INDEX_FILE_PATH;

  windows.initial.loadURL(startURL);

  windows.initial.on('closed', () => {
    windows.initial = null;
  });
};

const createWindow: Record<WindowOptionNames, CreateWindow> = {
  initial,
};

export default createWindow;
