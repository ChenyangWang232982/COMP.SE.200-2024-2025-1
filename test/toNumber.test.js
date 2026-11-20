import { describe, expect, it } from "vitest";
import toNumber from '../src/toNumber.js'

describe('toNumber - Part 1 planned tests', () => {
    it('returns a number unchanged', () => {
        expect(toNumber(3.2)).toBe(3.2)
        expect(toNumber(0)).toBe(0)
        expect(toNumber(-3.5)).toBe(-3.5)
    })

    it('convert string to number', () => {
        expect(toNumber('42')).toBe(42)
        expect(toNumber(' 42 ')).toBe(42)
        expect(toNumber('3.14')).toBe(3.14)
    })

    it('convert binary and octal to number', () => {
        expect(toNumber('0b101')).toBe(5)
        expect(toNumber('0o10')).toBe(8)
    })

    it('invalid strings should return NaN', () => {
        expect(toNumber('abc')).toBeNaN()
        expect(toNumber('3.14abc')).toBeNaN()
        expect(toNumber('0b102')).toBeNaN()
    })

    it('empty or missing value should return NaN', () => {
        expect(toNumber('')).toBeNaN()
        expect(toNumber(' ')).toBeNaN()
        expect(toNumber(null)).toBeNaN()
        expect(toNumber(undefined)).toBeNaN()
    })

    it('Other invalid values should return NaN', () => {
        expect(toNumber(true)).toBeNaN()
        expect(toNumber(false)).toBeNaN()
        expect(toNumber(Infinity)).toBeNaN()
        expect(toNumber(-Infinity)).toBeNaN()
    })
 
})

describe('toNumber - AI assisted tests', () => {
    // Numeric coercion follows the documented conversion behavior; unlike
    // toFinite, this function does not clamp infinity or replace NaN.
    it.each([
        ['positive zero', 0, 0],
        ['negative zero', -0, -0],
        ['negative fraction', -3.5, -3.5],
        ['smallest positive number', Number.MIN_VALUE, Number.MIN_VALUE],
        ['largest finite number', Number.MAX_VALUE, Number.MAX_VALUE],
        ['positive infinity', Infinity, Infinity],
        ['negative infinity', -Infinity, -Infinity],
    ])('preserves %s', (_label, input, expected) => {
        expect(toNumber(input)).toBe(expected)
    })

    it('preserves NaN', () => {
        expect(toNumber(NaN)).toBeNaN()
    })

    it.each([
        ['empty string', '', 0],
        ['Unicode whitespace', '\u00a0\t\n', 0],
        ['trimmed negative decimal', '  -3.5  ', -3.5],
        ['negative zero string', '-0', -0],
        ['scientific notation', '1.25e2', 125],
        ['overflow', '1e309', Infinity],
        ['underflow', '-1e-9999', -0],
        ['positive infinity string', 'Infinity', Infinity],
        ['hexadecimal', '0xFF', 255],
        ['uppercase binary', ' 0B101 ', 5],
        ['uppercase octal', '0O17', 15],
    ])('converts %s', (_label, input, expected) => {
        expect(toNumber(input)).toBe(expected)
    })

    it.each([
        ['alphabetic text', 'abc'],
        ['numeric prefix followed by text', '3.14abc'],
        ['invalid binary digit', '0b102'],
        ['invalid octal digit', '0o8'],
        ['incomplete exponent', '1e'],
        ['signed hexadecimal', '-0x1'],
        ['positive signed hexadecimal', '+0x1'],
        ['signed binary', '-0b1'],
        ['numeric separator', '1_000'],
    ])('returns NaN for %s', (_label, input) => {
        expect(toNumber(input)).toBeNaN()
    })

    it.each([
        ['null', null, 0],
        ['true', true, 1],
        ['false', false, 0],
    ])('converts %s', (_label, input, expected) => {
        expect(toNumber(input)).toBe(expected)
    })

    it('returns NaN for undefined or an omitted argument', () => {
        expect(toNumber(undefined)).toBeNaN()
        expect(toNumber()).toBeNaN()
    })

    it('returns NaN for primitive and boxed symbols', () => {
        expect(toNumber(Symbol('value'))).toBeNaN()
        expect(toNumber(Object(Symbol('value')))).toBeNaN()
    })

    it.each([
        ['boxed number', new Number(-2.5), -2.5],
        ['boxed string', new String('42'), 42],
        ['empty array', [], 0],
        ['single-element array', [12], 12],
        ['date', new Date('1970-01-01T00:00:01.000Z'), 1000],
    ])('converts %s using its primitive value', (_label, input, expected) => {
        expect(toNumber(input)).toBe(expected)
    })

    it('returns NaN for objects that do not represent a number', () => {
        expect(toNumber({})).toBeNaN()
        expect(toNumber([1, 2])).toBeNaN()
        expect(toNumber(new Date('invalid'))).toBeNaN()
    })

    it('uses a primitive returned by valueOf', () => {
        const input = { valueOf: () => '0b101' }
        expect(toNumber(input)).toBe(5)
    })

    it('uses the string representation when valueOf returns an object', () => {
        const input = { valueOf: () => ({}), toString: () => '12.5' }
        expect(toNumber(input)).toBe(12.5)
    })

    it('propagates an error from user-defined conversion', () => {
        const error = new Error('conversion failed')
        const input = { valueOf: () => { throw error } }
        expect(() => toNumber(input)).toThrow(error)
    })
})
