import { describe, expect, it } from 'vitest'
import chunk from '../src/chunk.js'

describe('chunk tests', () => {
  it('splits an array into equal groups', () => {
    expect(chunk(['apple', 'pear', 'bread', 'milk'], 2)).toEqual([
      ['apple', 'pear'],
      ['bread', 'milk'],
    ])
  })

  it('puts remaining elements into the last group', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  it('uses a group size of one when size is not provided', () => {
    expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]])
  })

  it('returns one group when size is larger than the array', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]])
  })

  it('returns an empty array for an empty input', () => {
    expect(chunk([], 2)).toEqual([])
  })

  it('returns an empty array when the input is null', () => {
    expect(chunk(null, 2)).toEqual([])
  })

  it('returns an empty array when size is zero', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([])
  })

  it('returns an empty array when size is negative', () => {
    expect(chunk([1, 2, 3], -1)).toEqual([])
  })

  it('does not change the original array', () => {
    const products = ['apple', 'pear', 'milk']

    chunk(products, 2)

    expect(products).toEqual(['apple', 'pear', 'milk'])
  })
})
