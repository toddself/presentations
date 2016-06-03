const assert = require('assert')
const Lab = require('lab')
const lab = exports.lab = Lab.script()

lab.test('assert this', (done) => {
  assert.equal(1, 1, 'yisssss')
  done()
})
