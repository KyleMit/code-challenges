// https://leetcode.com/problems/short-encoding-of-words/

export function minimumLengthEncoding(words: string[]): number {
    const sum = (arr: number[]) => arr.reduce((acc, cur) => acc + cur, 0)
    // remove word if it can fit entirely in another word
    words = words.filter((word, i) => !words.some((w, j) => (word.length < w.length || i > j) && w.endsWith(word)) )

    // sum word length + count of word groups
    // const encoding = words.join("#") + "#"
    const total = sum(words.map(w => w.length)) + words.length;
    return total
};

describe('minimumLengthEncoding', function() {
    it('passes test cases', function() {
        expect(minimumLengthEncoding(["t"])).to.equal(2);                   // s = "t#", i = [0]
        expect(minimumLengthEncoding(["ti", "ti"])).to.equal(3);            // s = "ti#", i = [0,0]
        expect(minimumLengthEncoding(["me", "time"])).to.equal(5);          // s = "time#", i = [0,2]
        expect(minimumLengthEncoding(["ab","b"])).to.equal(3);              // s = "ab#", i = [0,1]
        expect(minimumLengthEncoding(["time", "me", "bell"])).to.equal(10); // s = "time#bell#", i = [0, 2, 5]
    })
})
