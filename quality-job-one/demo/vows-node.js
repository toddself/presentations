const vows = require('vows')
const assert = require('assert')

const tests = vows.describe('a lot of typing')
  .addBatch({
    'to define': {
      'a few tests': () => assert(1, 1, 'yiss')
    }
  })

if (!module.parent) {
  tests.run()
} else {
  tests.export(module)
}
