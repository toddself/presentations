/* global it, describe */
const assert = require('assert')
const revSort = require('./reverse-sort')

describe('reverse sort', function () {
  it('reverse sorts strings', function () {
    assert.equal(revSort('abc'), 'cba')
  })
  it('reverse sorts arrays', function () {
    assert.deepEqual(revSort(['a', 'b', 'c']), ['c', 'b', 'a'])
  })
  it('reverse sorts object keys', function () {
    assert.deepEqual(revSort({a: 'first', b: 'last'}), {b: 'last', a: 'first'})
  })
})
