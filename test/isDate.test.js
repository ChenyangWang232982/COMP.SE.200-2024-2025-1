import { describe, expect, it } from 'vitest'
import isDate from "../src/isDate.js"

describe("isData tests, based on the test plan written by me", () =>{
    it("It should return a true for data object", () => {
        const value = new Date("2026-11-23");
        expect(isDate(value)).toBe(true);
    })
    // I don't know why but it seem that I have wrote this one in the document to be false when it should be true as the isDate functions clearly does not check if the data is valid. Oh well ;D
    it("retuns false for invalid Date object", () => {
        const value = new Date("invalid");
        expect(isDate(value)).toBe(false);
    })
    it("It must retuns a false for date in string from", () => {
        expect(isDate("2026-11-23")).toBe(false);
    })
    it("retur false for a null object", () => {
        expect(isDate(null)).toBe(false);
    })
    it("Fals because input is a plain object", () => {
        expect(isDate({})).toBe(false);
    })
    it("False input an empty array", () => {
        expect(isDate([])).toBe(false);
    })
    it("False for set object",() => {
        expect(isDate(new Set())).toBe(false);
    })
    it("false for map object", () => {
        expect(isDate(new Map())).toBe(false);
    })
    it("false for lambda functions", () => {
        expect(isDate(() => {})).toBe(false);
    })
})
/*
describe("isData negative tests, based on the test plan, and test written by me", () =>{

})
*/
