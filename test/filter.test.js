import { describe, it, expect, vi } from 'vitest'
import filter from '../src/filter'

describe("Human made test case based on the example for filter", () => {
    it("Elements will match the values", () => {
        const users = [
            { user: "barney", active: true },
            { user: "fred", active: false }
        ]

        const result = filter(users, ({ active }) => active)

        expect(result).toEqual([
            { user: "barney", active: true }
        ])
    })
})
// LLM addiotoinal test cases
describe('LLM assisted addional test cases for the filter function, used microsfot copilot chat', () => {
    it('returns an empty array when no elements match', () => {
        const numbers = [1, 2, 3]

        const result = filter(numbers, n => n > 10)

        expect(result).toEqual([])
    })

    it('returns all elements when predicate always returns true', () => {
        const numbers = [1, 2, 3]

        const result = filter(numbers, () => true)

        expect(result).toEqual([1, 2, 3])
    })

    it('invokes predicate with value, index, and array', () => {
        const array = ['a', 'b']
        const predicate = vi.fn(() => true)

        filter(array, predicate)

        expect(predicate).toHaveBeenNthCalledWith(1, 'a', 0, array)
        expect(predicate).toHaveBeenNthCalledWith(2, 'b', 1, array)
    })

    it('returns an empty array when array is null', () => {
        const result = filter(null, () => true)

        expect(result).toEqual([])
    })

    it('returns an empty array when array is undefined', () => {
        const result = filter(undefined, () => true)

        expect(result).toEqual([])
    })
})