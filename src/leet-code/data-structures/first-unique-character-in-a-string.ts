// https://leetcode.com/problems/first-unique-character-in-a-string/


export function firstUniqChar(s: string): number {
    var matches = new Map();
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        matches.set(char, (matches.get(char) ?? 0) + 1)
    }
    for (let [char, freq] of matches.entries()) {
        if (freq === 1) {
            return s.indexOf(char)
        }
    }
    return -1
};

export function firstUniqChar2(s: string): number {
    var matches = new Map();
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        matches.set(char, (matches.get(char) ?? 0) + 1)
    }
    for (let i=0; i<s.length; i++) {
        const char = s[i];
        if (matches.get(char) === 1) {
            return i
        }
    }
    return -1
};

function firstUniqChar3(s: string): number {
    const matches = new Array(26).fill(0)

    for (let i=0; i<s.length; i++) {
        matches[s.charCodeAt(i)-97]++
    }
    for (let i=0; i<s.length; i++) {
        if (matches[s.charCodeAt(i)-97] === 1) {
            return i
        }
    }
    return -1
};

export function firstUniqChar4(s: string): number {
    for (let i=0; i < s.length; i++) {
        if(s.indexOf((s[i])) === s.lastIndexOf(s[i])) return i;
    }
    return -1;
};



describe('firstUniqChar', function() {
    it('passes test cases', () => testCases(firstUniqChar))
})
describe('firstUniqChar2', function() {
    it('passes test cases', () => testCases(firstUniqChar2))
})
describe('firstUniqChar3', function() {
    it('passes test cases', () => testCases(firstUniqChar3))
})
describe('firstUniqChar4', function() {
    it('passes test cases', () => testCases(firstUniqChar3))
})

function testCases(fn: (s: string) => number) {
    expect(firstUniqChar("leetcode")).to.equal(0);
    expect(firstUniqChar("loveleetcode")).to.equal(2);
    expect(firstUniqChar("aabb")).to.equal(-1);
}
