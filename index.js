/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import {
  getFileExtension,
  getFileContent,
} from './src/file';

console.log(getFileExtension('package.json'));
console.log(getFileContent('package.json'));
