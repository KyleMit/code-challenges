export function main() {
    simpleArraySum([1,2,3]) // 6
}

function simpleArraySum(arr: number[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0)
}

main()
