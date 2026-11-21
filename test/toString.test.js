import { describe, expect, it } from 'vitest'
import toString from '../src/toString.js'

describe('toString tests', () => {
  it('returns a string unchanged', () => {
    expect(toString('Apple')).toBe('Apple')
  })

  it('returns an empty string unchanged', () => {
    expect(toString('')).toBe('')
  })

  it('converts a number to a string', () => {
    expect(toString(42)).toBe('42')
  })

  it('converts a negative decimal to a string', () => {
    expect(toString(-3.5)).toBe('-3.5')
  })

  it('preserves the sign of negative zero', () => {
    expect(toString(-0)).toBe('-0')
  })

  it('converts an array to a comma-separated string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
  })

  it('returns an empty string for null', () => {
    expect(toString(null)).toBe('')
  })

  it('returns an empty string for undefined', () => {
    expect(toString(undefined)).toBe('')
  })

  it('converts a boolean to a string', () => {
    expect(toString(false)).toBe('false')
  })

  it('does not change the original array', () => {
    const values = [1, 2, 3]

    toString(values)

    expect(values).toEqual([1, 2, 3])
  })
})
