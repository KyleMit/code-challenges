// https://leetcode.com/problems/valid-anagram/


const freqMap = (s: string) => [...s].reduce(
    (acc,cur) => acc.set(cur, (acc.get(cur) ?? 0) +1),
    new Map())

export function isAnagram(source: string, target: string): boolean {
    if (source.length != target.length) { return false }

    const sourceFreq = freqMap(source)
    const targetFreq = freqMap(target)

    return [...sourceFreq].every(([char, freq]) => targetFreq.get(char) === freq )
};

export function isAnagram2(source: string, target: string): boolean {
    if (source.length != target.length) { return false }

    var counter = new Array(26).fill(0)

    for (let i=0; i < source.length; i++) {
        counter[source.charCodeAt(i) - 97]++
        counter[target.charCodeAt(i) - 97]--
    }

    for (let count of counter) {
        if (count != 0) { return false }
    }

    return true
};


describe('isAnagram', function() {
    it('passes test cases', () => testCases(isAnagram))
})
describe('isAnagram2', function() {
    it('passes test cases', () => testCases(isAnagram2))
})


function testCases(fn: (source: string, target: string) => boolean) {
    expect(isAnagram("anagram","nagaram")).to.equal(true);
    expect(isAnagram("rat","car")).to.equal(false);
}
