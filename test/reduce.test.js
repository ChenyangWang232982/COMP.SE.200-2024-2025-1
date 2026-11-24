import { describe, it, expect, vi } from "vitest"
import reduce from "../src/reduce.js"

// Only LLM testcases
describe('LLM assisted reduce test cases. Used Microsoft Copilot.', () => {
    it('reduces an array with an initial accumulator', () => {
        const result = reduce([1, 2, 3], (sum, value) => sum + value, 0)

        expect(result).toBe(6)
    })

    it('reduces an array without an initial accumulator', () => {
        const result = reduce([1, 2, 3], (sum, value) => sum + value)

        expect(result).toBe(6)
    })

    it('reduces an object into a grouped result', () => {
        const result = reduce(
            { a: 1, b: 2, c: 1 },
            (acc, value, key) => {
                ; (acc[value] || (acc[value] = [])).push(key)
                return acc
            },
            {}
        )

        expect(result).toEqual({
            1: ['a', 'c'],
            2: ['b']
        })
    })

    it('returns the single element when reducing a single-item array without an accumulator', () => {
        const result = reduce([42], (acc, value) => acc + value)

        expect(result).toBe(42)
    })

    it('passes accumulator, value, key/index, and collection to iteratee', () => {
        const iteratee = vi.fn((acc, value) => acc + value)

        reduce([1, 2], iteratee, 0)

        expect(iteratee).toHaveBeenCalledWith(
            0,
            1,
            0,
            [1, 2]
        )

        expect(iteratee).toHaveBeenCalledWith(
            1,
            2,
            1,
            [1, 2]
        )
    })

    it('reduces an object to a sum', () => {
        const result = reduce(
            { a: 1, b: 2, c: 3 },
            (sum, value) => sum + value,
            0
        )

        expect(result).toBe(6)
    })
})