const vows = require('vows')
const assert = require('assert')

vows.describe('a lot of typing')
  .addBatch({
    'to define': {
      'a few tests': () => assert(1, 1, 'yiss')
    }
  }).run()

