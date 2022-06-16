// https://leetcode.com/problems/valid-parentheses/


export function isValid(s: string): boolean {
    const brackets = new Map([
        ["(",")"],
        ["[","]"],
        ["{","}"]
    ])
    const stack = []

    for (let i=0; i<s.length; i++) {
        const char = s[i];
        if (brackets.has(char)) {
            // opening, push stack
            stack.push(char)
        } else {
            // closing, pop and compare
            const top = stack.pop() ?? "";
            const complement = brackets.get(top);
            if (char !== complement) { return false }
        }
    }
    return stack.length === 0
};


describe('isValidParentheses', function() {
    it('passes test cases', function() {
        expect(isValid("()")).to.equal(true);
        expect(isValid("()[]{}")).to.equal(true);
        expect(isValid("(]")).to.equal(false);
    })
})

