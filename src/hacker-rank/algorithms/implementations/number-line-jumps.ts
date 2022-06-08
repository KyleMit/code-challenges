export function main() {
    kangaroo(0, 3, 4, 2) // "YES"
}


/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    // velocity must be an increment of start delta
    const startDelta = Math.abs(x1 - x2);   // | 0 - 4 | = 4
    const velocityDelta = Math.abs(v1 - v2) // | 3 - 2 | = 1
    const velocityIsDivisible = startDelta % velocityDelta === 0

    // kangaroos must start in the correct position
    const inCorrectOrder = (x1 < x2 && v1 > v2) // behind and faster
                        || (x1 > x2 && v1 < v2) // ahead and slower

    return inCorrectOrder && velocityIsDivisible ? "YES" : "NO";
}

main()
