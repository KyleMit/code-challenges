export function birthdayCakeCandles(candles: number[]) {
    let maxHeight = 0, maxHeightCount = 0
    candles.forEach(val => {
        if (val > maxHeight) {
            // reset height
            maxHeight = val
            maxHeightCount = 1
        } else if (val === maxHeight) {
            maxHeightCount++
        }
    })
    return maxHeightCount
}


describe('birthdayCakeCandles', function() {
    it('passes test cases', function() {
        expect(birthdayCakeCandles([3, 2, 1, 3])).to.equal(2);
    })
})
