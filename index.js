/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import {
  getFileExtension,
  getFileContent,
  isRelativePath,
} from './src/file.handler';

console.log(getFileExtension('package.json'));
console.log(getFileContent('package.json'));
console.log(isRelativePath('./package.json'));
