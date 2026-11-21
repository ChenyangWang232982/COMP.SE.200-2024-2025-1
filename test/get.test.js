import { describe, expect, it } from 'vitest'
import get from '../src/get.js'

describe('get tests', () => {
  it('returns the value at the given path', () => {
    const product = { name: 'Apple' }

    expect(get(product, 'name')).toBe('Apple')
  })

  it('returns a nested value using a string path', () => {
    const product = { producer: { name: 'Local Farm' } }

    expect(get(product, 'producer.name')).toBe('Local Farm')
  })

  it('returns a nested value using an array path', () => {
    const product = { producer: { name: 'Local Farm' } }

    expect(get(product, ['producer', 'name'])).toBe('Local Farm')
  })

  it('returns a value from an array using a path', () => {
    const cart = { products: [{ name: 'Apple' }] }

    expect(get(cart, 'products[0].name')).toBe('Apple')
  })

  it('returns undefined when the path does not exist', () => {
    const product = { name: 'Apple' }

    expect(get(product, 'price')).toBeUndefined()
  })

  it('returns the default value when the path does not exist', () => {
    const product = { name: 'Apple' }

    expect(get(product, 'price', 0)).toBe(0)
  })

  it('returns the default value when the property is undefined', () => {
    const product = { price: undefined }

    expect(get(product, 'price', 10)).toBe(10)
  })

  it('returns null instead of the default value for a null property', () => {
    const product = { price: null }

    expect(get(product, 'price', 10)).toBeNull()
  })

  it('returns zero instead of the default value for a zero property', () => {
    const product = { price: 0 }

    expect(get(product, 'price', 10)).toBe(0)
  })

  it('returns false instead of the default value for a false property', () => {
    const product = { available: false }

    expect(get(product, 'available', true)).toBe(false)
  })

  it('returns the default value when the object is null or undefined', () => {
    expect(get(null, 'name', 'Unknown')).toBe('Unknown')
    expect(get(undefined, 'name', 'Unknown')).toBe('Unknown')
  })
})
