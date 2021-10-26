export function main() {
    // perf tests
    // https://jsbench.me/aokv7drxqs/1
    miniMaxSum([1, 2, 3, 4, 5]) // 10 14
    miniMaxSum2([1, 2, 3, 4, 5]) // 10 14
    miniMaxSum3([1, 2, 3, 4, 5]) // 10 14
}


function miniMaxSum(arr: number[]) {
    let sorted = arr.sort()
    let total = arr.reduce((acc, cur) => acc + cur, 0)
    let minMax = [total - sorted[arr.length - 1], total - arr[0]]
    console.log(minMax.join(" "))
}


function miniMaxSum2(arr: number[]) {
    let values = arr.reduce((acc, cur) => {
        if (cur < acc.min) acc.min = cur;
        if (cur > acc.max) acc.max = cur;
        acc.sum += cur
        return acc
    }, {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE,
        sum: 0
    })
    let minMax = [
        values.sum - values.max,
        values.sum - values.min
    ]
    console.log(minMax.join(" "))
}

function miniMaxSum3(arr: number[]) {
    let min = arr[0], max = 0, sum = 0
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        if (cur < min) min = cur;
        if (cur > max) max = cur;
        sum += cur
    }
    let minMax = [sum - max, sum - min]
    console.log(minMax.join(" "))
}


main()
