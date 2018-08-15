/* @flow */

import fs from 'fs';
import path from 'path';

export const existsPath = (filename: string): boolean => {
  const result = fs.existsSync(filename);
  return Boolean(result);
};

export const isRelativePath = (filename: string): boolean => {
  const result = filename.match(/^\.\//);
  return Boolean(result);
};

export const getFileExtension = (filename: string): string => {
  const extention = filename.split('.').pop();
  return extention;
};

export const getFileContent = (filename: string): string => {
  if (isRelativePath(filename)) {
    const content = fs.readFileSync(filename, 'utf-8');
    return content;
  }
  const content = fs.readFileSync(path.resolve('node_modules', filename), 'utf-8');
  return content;
};
