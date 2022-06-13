// https://www.hackerrank.com/challenges/dynamic-array

export function dynamicArray(n: number, queries: number[][]): number[] {
    let lastAnswer = 0;
    let arr: number[][] = Array(n).fill(null).map(() => []);
    let answers: number[] = []

    queries.forEach(query => {
        let [type, x, y] = query
        let idx = (x ^ lastAnswer) % n
        if (type === 1) {
            arr[idx].push(y)
        } else {
            let jdx = y % arr[idx].length
            lastAnswer = arr[idx][jdx]
            answers.push(lastAnswer)
        }
    })

    return answers;
}

describe('dynamicArray', function() {
    it('passes test cases', function() {
        const n = 2
        const queries = [
            [ 1, 0, 5 ],
            [ 1, 1, 7 ],
            [ 1, 0, 3 ],
            [ 2, 1, 0 ],
            [ 2, 1, 1 ]
        ]
        const result = dynamicArray(n, queries);
        expect(result).to.deep.equal([ 7, 3 ]);
    })
})

