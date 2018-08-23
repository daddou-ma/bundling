const fs = require('fs');
const path = require('path');
const { assert, should, expect } = require('chai');
const { getFileContent } = require('../src/file');
const { 
  parseCode,
  selectImportNodes,
  getImportPath,
} = require('../src/parser');

describe('parser.js', () => {

  const error = 'hahaaa incorrect code ! :3';
  const message = 'console.log(\'message\');';
  const require = 'import path from "path";';

  describe('#parseCode()', () => {
    it('message return an object', () => {
      assert.typeOf(parseCode(message), 'object');
    });
    it('require return an object', () => {
      assert.typeOf(parseCode(require), 'object');
    });
    it('error throw an error', () => {
      expect(() => parseCode(error)).to.throw();
    });
    it('null throw an error', () => {
      expect(() => parseCode(null)).to.throw();
    });
  });

  describe('#selectImportNodes()', () => {
    it('message return an empty array', () => {
      expect(selectImportNodes(parseCode(message))).to.be.an('array').to.have.lengthOf(0);
    });
    it('require return an array with size 1', () => {
      expect(selectImportNodes(parseCode(require))).to.be.an('array').to.have.lengthOf(1);
    });
    it('null throw an error', () => {
      expect(selectImportNodes(null)).to.be.an('array').to.have.lengthOf(0);
    });
  });

  describe('#getImportPath()', () => {
    it('message return an empty array', () => {
      expect(selectImportNodes(parseCode(message))).to.be.an('array').to.have.lengthOf(0);
    });
    it('require return an array with size 1', () => {
      expect(selectImportNodes(parseCode(require))).to.be.an('array').to.have.lengthOf(1);
    });
    it('null throw an error', () => {
      expect(selectImportNodes(null)).to.be.an('array').to.have.lengthOf(0);
    });
  });

  describe('#getImportPath()', () => {
    it('require return path', () => {
      expect(getImportPath(selectImportNodes(parseCode(require))[0])).to.equal('path');
    });
    it('null throw an error', () => {
      expect(() => getImportPath(null)).to.throw();
    });
  });
});
