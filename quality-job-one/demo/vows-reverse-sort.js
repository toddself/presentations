const vows = require('vows')
const assert = require('assert')
const revSort = require('./reverse-sort')

const tests = vows.describe('reverse sort')
  .addBatch({
    'reverse sorts strings': function () {
      assert.equal(revSort('abc'), 'cba')
    },
    'reverse sorts arrays': function () {
      assert.deepEqual(revSort(['a', 'b', 'c']), ['c', 'b', 'a'])
    },
    'reverse sorts object keys': function () {
      assert.deepEqual(revSort({a: 'first', b: 'last'}), {b: 'last', a: 'first'})
    }
  })

if (!module.parent) {
  tests.run()
} else {
  tests.export(module)
}
