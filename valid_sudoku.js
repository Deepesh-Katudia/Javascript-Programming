/*
Valid Sudoku (Medium)
Concept
You must check if a Sudoku board is valid.
Why this builds hash map thinking

You must track:
Seen numbers in rows
Seen numbers in columns
Seen numbers in 3×3 boxes

What you store
Instead of 9 separate maps, you can store:
"row-0-5"
"col-3-9"
"box-1-7"
in a single Set.
Core Idea
Encode constraints as strings and store them.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const seen = new Set();

    for(let r=0; r<9; r++){
        for(let c=0; c<9; c++){
            const val = board[r][c];
            if(val === ".") continue;

            const boxIndex = Math.floor(r/3)*3 + Math.floor(c/3);
            const rowKey = `r${r}-${val}`;
            const colKey = `c${c}-${val}`;
            const boxKey = `b${boxIndex}-${val}`;

            if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
        return false;
      }

            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);
        }
    }
    return true;
};

// Test Cases
console.log(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
])); // Output: true