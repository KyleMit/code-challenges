// https://www.hackerrank.com/challenges/grading/problem

export function gradingStudents(grades: number[]) {
    return grades.map(grade => {
        if (grade < 38) { return grade }
        let mod = grade % 5
        if (mod < 3) { return grade }
        return grade + 5 - mod
    })

}

describe('gradingStudents', function() {
    it('passes test cases', function() {
        expect(gradingStudents([73, 67, 38, 33])).to.have.members([75, 67, 40, 33]);
    })
})
