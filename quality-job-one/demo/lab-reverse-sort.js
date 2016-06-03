const assert = require('assert')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const revSort = require('./reverse-sort')

lab.test('reverses and sorts', (done) => {
  assert.deepEqual(revSort(['a', 'b', 'c']), ['c', 'b', 'a'], 'reverse sort array')
  assert.equal(revSort('abc'), 'cba', 'reverse sort string')
  assert.deepEqual(revSort({a: 'first', b: 'last'}), {b: 'last', a: 'first'}, 'reverse sort object')
  done()
})
