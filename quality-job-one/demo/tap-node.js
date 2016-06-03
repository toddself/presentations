const test = require('tap').test

test('why not get you a test runner that can do both', (t) => {
  t.plan(3)
  setTimeout(() => t.equal(0, 0, 'yes'), 500)
  setTimeout(() => t.equal(2, 2, 'yes'), 500)
  t.equal(1, 1, 'yisss')
})
