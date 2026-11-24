import { describe, it, expect } from "vitest"
import isEmpty from "../src/isEmpty.js"

/*
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 * 
*/

describe("Human created tests based on the examples for isEmpty", () => {
    it("True if the value is null", () => {
        expect(isEmpty(null)).toBe(true)
    })

    it("True when it is a boolean value", () => {
        expect(isEmpty(true)).toBe(true)
    })

    it("True when the input is a number", () => {
        expect(isEmpty(1)).toBe(true)
    })

    it("False when an non-empty array", () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
    })

    it("False when non-empty string", () => {
        expect(isEmpty("abc")).toBe(false)
    })

    it("False for objects with properties", () => {
        expect(isEmpty({ a: 1 })).toBe(false)
    })
})

describe('LLM assisted additional cases for isEmpty, Used Microsfot copilot chat', () => {
    it('returns true for an empty array', () => {
        expect(isEmpty([])).toBe(true)
    })

    it('returns true for an empty string', () => {
        expect(isEmpty('')).toBe(true)
    })

    it('returns true for an empty object', () => {
        expect(isEmpty({})).toBe(true)
    })

    it('returns true for an empty Map', () => {
        expect(isEmpty(new Map())).toBe(true)
    })

    it('returns false for a non-empty Map', () => {
        const map = new Map([['key', 'value']])
        expect(isEmpty(map)).toBe(false)
    })

    it('returns true for an empty Set', () => {
        expect(isEmpty(new Set())).toBe(true)
    })

    it('returns false for a non-empty Set', () => {
        expect(isEmpty(new Set([1]))).toBe(false)
    })

    it('returns true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true)
    })
})