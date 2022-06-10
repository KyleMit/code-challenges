// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Time Complexity - O(n²)
export function maxProfit(prices: number[]): number {
    let maxDelta = 0;
    for (let i=0; i < prices.length; i++) {
        for (let j=i+1; j < prices.length; j++) {
            const curDelta = prices[j] - prices[i]
            if (curDelta > maxDelta) {
                maxDelta = curDelta
            }
        }
    }
    return maxDelta
};

// Time Complexity - O(n)
export function maxProfit2(prices: number[]): number {
    let minValue = prices[0];
    let maxDelta = 0;
    for (let i=0; i < prices.length; i++) {
        const value = prices[i];
        const curDelta = value - minValue

        if (value < minValue) {
            // set new min value
            minValue = value;
        } else if (curDelta > maxDelta) {
            // set new max delta
            maxDelta = curDelta
        }
    }
    return maxDelta
};


it('maxProfit', () => test(maxProfit))
it('maxProfit2', () => test(maxProfit2))

function test(fn: any) {
    expect(fn([7,1,5,3,6,4])).to.equal(5);
    expect(fn([7,6,4,3,1])).to.equal(0);
}
