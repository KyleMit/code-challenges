export function main() {
    gradingStudents([73, 67, 38, 33]) // [75, 67, 40, 33]
}

function gradingStudents(grades: number[]) {
    return grades.map(grade => {
        if (grade < 38) { return grade }
        let mod = grade % 5
        if (mod < 3) { return grade }
        return grade + 5 - mod
    })

}

main();
