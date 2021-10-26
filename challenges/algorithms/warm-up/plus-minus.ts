export function main() {
    plusMinus([1,1,0,-1,-1]) // [0.400000, 0.400000, 0.200000]
}

function plusMinus(arr: number[]) {
    let proportions = arr.reduce((acc, cur, i) => {
        if (cur > 0) {
            acc.positive++
        } else if (cur < 0) {
            acc.negative++
        } else {
            acc.zero++
        }
        return acc
    }, {
      positive: 0,
      negative: 0,
      zero: 0,
      size: arr.length
    })

    let percents = [
        proportions.positive / proportions.size,
        proportions.negative / proportions.size,
        proportions.zero / proportions.size
    ]

    percents.forEach(val => {
        console.log(val);
    })
}

main()
