export function main() {
    birthdayCakeCandles([3, 2, 1, 3]) // 2
}

function birthdayCakeCandles(candles: number[]) {
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


main()
