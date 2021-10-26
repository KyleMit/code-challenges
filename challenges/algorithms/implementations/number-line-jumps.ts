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
    let i = 0
    let pos1 = x1 + v1 * i
    let pos2 = x2 + v2 * i
    let response = pos1 == pos2 ? "YES" : "NO";
    return response;
}

main()
