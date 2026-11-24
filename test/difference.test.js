import { describe, it, expect, vi } from "vitest"
import difference from "../src/difference.js"

describe("Human writen test cases for difference", () => {
    it("return value from first array", () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });

    it("return empty array when all values are excluded", () => {
        expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
    });

    it("return original array value when no match", () => {
        expect(difference([1, 2, 3], [4, 5])).toEqual([1, 2, 3]);
    });

    it("does it support multiple arrays", () => {
        expect(
            difference([1, 2, 3, 4, 5], [1, 2], [4])
        ).toEqual([3, 5]);
    });
})


// LLM asisted test cases that were not covered by human made test cases.
describe('LLM assisted difference test cases. Used Microsoft Copilot Chat.', () => {
    it('preserves the order of the first array', () => {
        expect(
            difference([3, 1, 4, 2], [1, 2])
        ).toEqual([3, 4]);
    });

    it('returns an empty array when the input array is empty', () => {
        expect(difference([], [1, 2, 3])).toEqual([]);
    });

    it('returns an empty array when the first argument is null', () => {
        expect(difference(null, [1, 2])).toEqual([]);
    });

    it('returns an empty array when the first argument is undefined', () => {
        expect(difference(undefined, [1, 2])).toEqual([]);
    });

    it('handles duplicate values in the source array', () => {
        expect(
            difference([1, 2, 2, 3, 4], [2])
        ).toEqual([1, 3, 4]);
    });

    it('uses SameValueZero comparison for NaN', () => {
        expect(
            difference([1, NaN, 2], [NaN])
        ).toEqual([1, 2]);
    });

    it('handles exclusion arrays that are empty', () => {
        expect(
            difference([1, 2, 3], [])
        ).toEqual([1, 2, 3]);
    });
});