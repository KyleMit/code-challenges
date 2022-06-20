// https://leetcode.com/problems/palindrome-number/

export function isPalindrome(x: number): boolean {
    const str = String(x);
    let i = 0;
    let j = str.length - 1
    while (i < j) {
        if (str[i] != str[j]) { return false }
        i++
        j--
    }
    return true;
};

export function isPalindrome2(x: number): boolean {
    if (x<0 || (x!=0 && x%10==0)) { return false }
    let rev = 0;
    while (x > rev) {
        rev = rev*10 + x%10
        x = Math.floor(x/10)
    }
    return (x==rev || x==Math.floor(rev/10))
};



describe('isPalindrome', function() {
    const testCases = (fn: (x: number) => boolean) => {
        expect(fn(121)).to.equal(true);
        expect(fn(1221)).to.equal(true);
        expect(fn(-121)).to.equal(false);
        expect(fn(10)).to.equal(false);
        expect(fn(0)).to.equal(true);
    }

    it('v1', () => testCases(isPalindrome))
    it('v2', () => testCases(isPalindrome2))
})

