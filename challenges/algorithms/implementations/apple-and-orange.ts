export function main() {
    countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ] ) // [1, 1]
}


/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(houseStart: number, houseEnd: number, applePos: number, orangePos: number, apples: number[], oranges: number[]): void {
    let onHouse = (pos: number) => pos >= houseStart && pos <= houseEnd
    let fruitOnHouse = [
        apples.map(a => applePos + a).filter(onHouse).length,
        oranges.map(o => orangePos + o).filter(onHouse).length
    ]
    fruitOnHouse.forEach(n => {
        console.log(n)
    })
}

main()
