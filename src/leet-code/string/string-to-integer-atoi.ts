// https://leetcode.com/problems/string-to-integer-atoi/

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max)

export function myAtoi(s: string): number {
    const [_, negative, num] = s.match(/\s*([-+])?(\d*)/)!
    const val = Number(num) * (negative === "-" ? -1 : 1)
    return clamp(val, Math.pow(-2,31), Math.pow(2,31) - 1)
};

export function myAtoi2(s: string): number {
    const str = [...s].reverse();
    let isNegative = false;

    let char = str.pop();
    while (char == " ") {
        char = str.pop();
    }

    if (char === "-" || char === "+") {
        if (char === "-") isNegative = true;
        char = str.pop()
    }

    const isNumeric = (str: string | undefined) => !isNaN(str as any as number) && !isNaN(parseFloat(str ?? ""));

    let sum = 0;
    while (isNumeric(char)) {
        sum = sum * 10 + Number(char)
        char = str.pop();
    }

    if (isNegative) sum *= -1

    return clamp(sum, Math.pow(-2,31), Math.pow(2,31) - 1)
};

describe('myAtoi', function() {
    const testCases = (fn: (s: string) => number) => {
        // expect(fn("42")).to.equal(42);
        // expect(fn("   -42")).to.equal(-42);
        expect(fn("4193 with words")).to.equal(4193);
        expect(fn("-91283472332")).to.equal(-2147483648);
        expect(fn("+1")).to.equal(1);

    }

    // it('v1', () => testCases(myAtoi))
    it('v2', () => testCases(myAtoi2))
})
