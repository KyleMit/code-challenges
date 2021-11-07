export function main() {
    compareTriplets([ 5, 6, 7 ], [ 3, 6, 10 ]) // [1,1]
}

function compareTriplets(a: number[], b: number[]): [number, number] {
    return Array(a.length).fill(null).reduce((acc, cur, i) => {
        if (a[i] === b[i]) return acc;
        let winnerIndex = a[i] > b[i] ? 0 : 1
        acc[winnerIndex]++
        return acc
    }, [0, 0])
}

main()
