/* @flow */

import fs from 'fs';

export const isModule = (filename: string): boolean => {
  try {
    return Boolean(require.resolve(filename));
  } catch (e) {
    return false;
  }
};

export const isCoreModule = (filename: string): boolean => {
  try {
    return !filename.match(/(\.*)(\/)/) && require.resolve(filename) === filename;
  } catch (e) {
    return false;
  }
};

export const resolveAbsolutePath = (filename: string): any => {
  try {
    return require.resolve(filename);
  } catch (exception) {
    return null;
  }
};

export const getFileExtension = (filename: string): any => {
  const temp = filename && filename.split('.').pop();
  if (typeof temp !== 'string' || temp.length === 0) {
    return null;
  }

  return temp === filename ? '*' : temp;
};

export const getFileContent = (filename: string): any => {
  try {
    return fs.readFileSync(filename, 'utf-8');
  } catch (exception) {
    return null;
  }
};
