export { }

const calorieList = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`

var sum = (arr: any[]) => arr.reduce((a, c) => a + Number(c), 0)

const elfSupplies = calorieList.split("\n\n")
const elfCalories = elfSupplies.map(x => sum(x.split("\n")))
const sortedElves = elfCalories.sort((a,b) => b - a)

const highestCalories = sortedElves[0]
const topTheeElvesSum = sum(sortedElves.slice(0, 3))

console.log({ highestCalories, topTheeElvesSum })
