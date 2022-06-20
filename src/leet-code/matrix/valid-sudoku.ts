// https://leetcode.com/problems/valid-sudoku/

const hasDuplicate = (arr: any[], ignoreChar = ".") => {
    const items = new Set();
    for (let i=0; i<arr.length; i++) {
        const item = arr[i]
        if (item == ignoreChar) { continue; }
        if (items.has(item)) { return true }
        items.add(item)
    }
    return false
}

export function isValidSudoku(board: string[][]): boolean {
    // check each row
    for (let i=0; i<board.length; i++) {
        const row = board[i];
        if (hasDuplicate(row)) { return false }
    }
    // check each column
    for (let i=0; i<board.length; i++) {
        const col = Array.from({length: board.length}, (_, j) => board[j][i])
        if (hasDuplicate(col)) { return false }
    }
    // check each subgrid
    for (let i=0; i<board.length; i+=3) {
        for (let j=0; j<board.length; j+=3) {
            const subgrid = [
                board[i][j],   board[i][j+1],   board[i][j+2],
                board[i+1][j], board[i+1][j+1], board[i+1][j+2],
                board[i+2][j], board[i+2][j+1], board[i+2][j+2],
            ]
            if (hasDuplicate(subgrid)) { return false }
        }
    }
    return true;
};

const tryAdd = <T>(set: Set<T>, value: T) => {
    if (set.has(value)) {return false}
    set.add(value)
    return true;
}

export function isValidSudoku2(board: string[][]): boolean {
    const matches = new Set();
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board.length; j++) {
            const el = board[i][j];
            if (el === '.') {continue}
            const pos = `(${el})`
            const rowPos = `(${el})${i}` // '4' in row 7 is encoded as "(4)7"
            const colPos = `${j}(${el})` // '4' in column 7 is encoded as "7(4)"
            const grdPos = `${i/3}(${el})${j/3}` // '4' in the top-right block is encoded as "0(4)2"
            if (!tryAdd(matches, rowPos) || !tryAdd(matches, colPos) || !tryAdd(matches, grdPos)) {
                return false
            }
        }
    }
    return true;
};




describe('isValidSudoku', function() {
    it('returns true when valid', () => validTestCase(isValidSudoku))
    it('returns false when invalid', () => invalidTestCase(isValidSudoku))
})
describe('isValidSudoku2', function() {
    it('returns true when valid', () => validTestCase(isValidSudoku2))
    it('returns false when invalid', () => invalidTestCase(isValidSudoku2))
})

function validTestCase(fn: (board: string[][]) => boolean) {
    const board = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    expect(fn(board)).to.equal(true);
}
function invalidTestCase(fn: (board: string[][]) => boolean) {
    const board = [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
    expect(fn(board)).to.equal(false);
}

