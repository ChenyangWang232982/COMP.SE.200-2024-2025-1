import { describe, expect, it } from 'vitest'
import clamp from '../src/clamp.js'

describe('clamp tests', () => {
  it('returns the number when it is within the bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5)
  })

  it('returns the lower bound when the number is below it', () => {
    expect(clamp(-5, 0, 10)).toBe(0)
  })

  it('returns the upper bound when the number is above it', () => {
    expect(clamp(15, 0, 10)).toBe(10)
  })

  it('returns the lower bound when the number equals it', () => {
    expect(clamp(0, 0, 10)).toBe(0)
  })

  it('returns the upper bound when the number equals it', () => {
    expect(clamp(10, 0, 10)).toBe(10)
  })

  it('clamps a negative number within negative bounds', () => {
    expect(clamp(-15, -10, -1)).toBe(-10)
  })

  it('returns the bound when both bounds are equal', () => {
    expect(clamp(7, 5, 5)).toBe(5)
  })

  it('returns NaN when the number is NaN', () => {
    expect(clamp(NaN, 0, 10)).toBeNaN()
  })
})
