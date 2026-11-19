import { describe, expect, it } from 'vitest'
import get from '../src/get.js'

describe('get — basic test', () => {
  it('returns the value at the given path', () => {
    const product = { name: 'Apple' }

    expect(get(product, 'name')).toBe('Apple')
  })
})