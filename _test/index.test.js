const assert = require('assert')
const add = require('../src/index')

describe('find', () => {
    it('gets the first item that passes test', async () => {
        assert.strictEqual(add(1,3), 4)
    })
})