const test = require('tap').test
const revSort = require('./reverse-sort')

test('reverses and sorts', (t) => {
  t.deepEqual(revSort(['a', 'b', 'c']), ['c', 'b', 'a'], 'reverse sort array')
  t.equal(revSort('abc'), 'cba', 'reverse sort string')
  t.deepEqual(revSort({a: 'first', b: 'last'}), {b: 'last', a: 'first'}, 'reverse sort object')
  t.deepEqual(revSort([10, 11, 1, 2]), [11, 10, 2, 1], 'reverse sort numbers')
  t.end()
})
