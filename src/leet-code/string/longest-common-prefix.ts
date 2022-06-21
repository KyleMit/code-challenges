// https://leetcode.com/problems/longest-common-prefix/

import { workerData } from "worker_threads"
import { staircase } from "../../hacker-rank/algorithms/staircase"

export function longestCommonPrefix(words: string[]): string {
    if (words.length === 1) return words[0]

    const matches: string[] = []
    const [first, ...remainder] = words
    for (let i=0; i<first.length; i++) {
        const char = first[i]
        if (remainder.every(w => w[i] === char)) {
            matches.push(char)
        } else {
            break;
        }
    }
    return matches.join("")
};

// Horizontal scanning - LCP(S₁,...Sₙ) = =LCP(LCP(LCP(S₁, S₂), S₃),...Sₙ)
export function longestCommonPrefix2(words: string[]): string {
    if (words.length === 0) return ""

    let prefix = words[0];
    for (let i=1; i<words.length; i++) {
        // check full string, start walking back from there
        while (!words[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix.length == 0) return ""
        }
    }
    return prefix;
};

// vertical scanning
export function longestCommonPrefix3(words: string[]): string {
    if (!words?.length) return ""

    const [first, ...remainder] = words
    for (let i=0; i<first.length; i++) {
        const char = first[i]
        for (let j=0; j<remainder.length; j++) {
            const word = remainder[j];
            if (i == word.length || word[i] != char) {
                return first.substring(0,i)
            }
        }
    }
    return first
};

describe('longestCommonPrefix', function() {
    const testCases = (fn: (words: string[]) => string) => {
        expect(fn(["flower","flow","flight"])).to.equal("fl");
        expect(fn(["dog","racecar","car"])).to.equal("");
    }

    it('v1', () => testCases(longestCommonPrefix))
    it('v2', () => testCases(longestCommonPrefix2))
    it('v3', () => testCases(longestCommonPrefix3))
})
