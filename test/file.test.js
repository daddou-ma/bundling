const fs = require('fs');
const path = require('path');
const { assert } = require('chai');
const { 
  isModule,
  isCoreModule,
  resolveAbsolutePath,
  getFileExtension,
  getFileContent,
} = require('../src/file');

describe('file.js', () => {
  before(() => {
    if (!fs.existsSync('temp')) {
      fs.mkdirSync('temp');
      fs.appendFileSync('temp/message.js', 'console.log(\'message\')');
    }
  });

  describe('#isModule()', () => {
    it('http return true', () => {
      assert.equal(isModule('http'), true);
    });
    it('./http return false', () => {
      assert.equal(isModule('./http'), false);
    });
    it('notcore return false', () => {
      assert.equal(isModule('notecode'), false);
    });
    it('../temp/message return true', () => {
      assert.equal(isModule(path.join(__dirname, '../temp/message.js')), true);
    });
    it('empty return false', () => {
      assert.equal(isModule(''), false);
    });
    it('undefined return false', () => {
      assert.equal(isModule(undefined), false);
    });
    it('null return false', () => {
      assert.equal(isModule(null), false);
    });
  });

  describe('#isCoreModule()', () => {
    it('http return true', () => {
      assert.equal(isCoreModule('http'), true);
    });
    it('./http return false', () => {
      assert.equal(isCoreModule('./http'), false);
    });
    it('notcore return false', () => {
      assert.equal(isCoreModule('notecode'), false);
    });
    it('../temp/message return false', () => {
      assert.equal(isCoreModule(path.join(__dirname, '../temp/message.js')), false);
    });
    it('empty return false', () => {
      assert.equal(isCoreModule(''), false);
    });
    it('undefined return false', () => {
      assert.equal(isCoreModule(undefined), false);
    });
    it('null return false', () => {
      assert.equal(isCoreModule(null), false);
    });
  });

  describe('#resolveAbsolutePath()', () => {
    it('http return http', () => {
      assert.equal(resolveAbsolutePath('http'), 'http');
    });
    it('./http return null', () => {
      assert.equal(resolveAbsolutePath('./http'), null);
    });
    it('notcore return null', () => {
      assert.equal(resolveAbsolutePath('notecode'), null);
    });
    it('../temp/message return false', () => {
      assert.typeOf(resolveAbsolutePath('../temp/message'), 'string');
    });
    it('empty return null', () => {
      assert.equal(resolveAbsolutePath(''), null);
    });
    it('undefined return null', () => {
      assert.equal(resolveAbsolutePath(undefined), null);
    });
    it('null return null', () => {
      assert.equal(resolveAbsolutePath(null), null);
    });
  });

  describe('#getFileExtension()', () => {
    it('file return null', () => {
      assert.equal(getFileExtension('file'), '*');
    });
    it('file.ext return ext', () => {
      assert.equal(getFileExtension('file.ext'), 'ext');
    });
    it('file.txt.ext return ext', () => {
      assert.equal(getFileExtension('file.txt.ext'), 'ext');
    });
    it('empty return null', () => {
      assert.equal(getFileExtension(''), null);
    });
    it('undefined return null', () => {
      assert.equal(getFileExtension(undefined), null);
    });
    it('null return null', () => {
      assert.equal(getFileExtension(null), null);
    });
  });

  describe('#getFileContent()', () => {
    it('file return null', () => {
      assert.equal(getFileContent('not.exist'), null);
    });
    it('file return null', () => {
      assert.equal(getFileContent(resolveAbsolutePath('../temp/message')), 'console.log(\'message\')');
    });
  });

  after(() => {
    if (fs.existsSync('temp')) {
      fs.unlinkSync('temp/message.js');
      fs.rmdirSync('temp');
    }
  });
});