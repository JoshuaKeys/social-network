var assert = require('assert');
var server = require('../server.js');
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
      server.close();
    });
  });
});
