// https://www.hackerrank.com/challenges/between-two-sets/problem

const getFactors = (num: number): number[] => {
    const maxVal = Math.floor(Math.sqrt(num))
    const nums = Array.from({length: maxVal}, (_, i) => i + 1)
    const factors = nums.reduce((acc, n) => {
        if (num % n !== 0) return acc
        acc.push(n)
        const compliment = num / n
        if (compliment != n) {
            acc.push(compliment)
        }
        return acc
    }, [] as number[])
    return factors.sort((a,b) => a - b)
}

export function getTotalX(a: number[], b: number[]): number {
    const factors = b.map(x => getFactors(x))
    const [firstFactor, ...remaining] = factors
    const eligibleFactors = firstFactor.filter(n => remaining.every(r => r.includes(n)))
    const eligibleMultiples = eligibleFactors.filter(n => a.every(x => n % x == 0))
    return eligibleMultiples.length
}

describe('getTotalX', function() {
    it('passes test cases', function() {
        expect(getTotalX([ 2, 4 ],[ 16, 32, 96 ])).to.equal(3);
    })
})
