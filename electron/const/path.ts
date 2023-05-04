import path from 'path';

const ROOT_PATH = path.resolve(__dirname, '..', '..');

const REACT_BUILD_INDEX_FILE_PATH = `file://${path.resolve(ROOT_PATH, 'build-react/index.html')}`;

export { REACT_BUILD_INDEX_FILE_PATH };
