// https://leetcode.com/problems/ransom-note/

export function canConstruct(ransomNote: string, magazine: string): boolean {
    const letters = [...magazine].reduce((acc,cur) => acc.set(cur, (acc.get(cur) ?? 0) +1), new Map())

    for (let i=0; i<ransomNote.length; i++) {
        const char = ransomNote[i];
        const avail = letters.get(char);
        if (!avail) { return false }
        letters.set(char, avail-1)
    }
    return true
};

describe('canConstruct', function() {
    it('passes test cases', function() {
        expect(canConstruct("a","b")).to.equal(false);
        expect(canConstruct("aa","ab")).to.equal(false);
        expect(canConstruct("aa","aab")).to.equal(true);
    })
})
