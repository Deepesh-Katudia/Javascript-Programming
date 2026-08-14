/*
79. Word Search
Medium
Topics
premium lock icon
Companies
Given an m x n grid of characters board and a string word, return true if word
exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where
adjacent cells are horizontally or vertically neighboring. The same letter cell
may not be used more than once.



Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
Explanation: the second "B" would have to reuse the cell already spent on the
first one, and cells cannot be revisited within a single path.


Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consist of only lowercase and uppercase English letters.
*/

var exist = function(board, word) {
    if (!board.length || !board[0].length || !word.length) return false;

    const rows = board.length;
    const cols = board[0].length;

    // Same choose -> explore -> un-choose skeleton as Subsets and Combination
    // Sum, but the "choice" here is a direction rather than an index, and the
    // path has to stay connected. `i` is how far into `word` we have matched.
    //
    // Instead of a separate `visited` set, the current cell is overwritten with
    // a sentinel that can never match a letter, then restored on the way out.
    // The board is mutated only for the lifetime of one path - every recursive
    // call puts back exactly what it took, so the caller's grid is unchanged.
    const dfs = (r, c, i) => {
        if (i === word.length) return true;                 // whole word matched
        if (r < 0 || r >= rows || c < 0 || c >= cols) return false;
        if (board[r][c] !== word[i]) return false;          // wrong letter, or already on this path

        const letter = board[r][c];
        board[r][c] = '#';                                  // choose

        const found =                                       // explore
            dfs(r + 1, c, i + 1) ||
            dfs(r - 1, c, i + 1) ||
            dfs(r, c + 1, i + 1) ||
            dfs(r, c - 1, i + 1);

        board[r][c] = letter;                               // un-choose

        return found;
    };

    // Any cell can start the word, so every one gets a try.
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }

    return false;
};

// Time: O(m * n * 4^L) where L is word.length - every cell is a possible start,
// and from each one the search branches into 3 new directions per step (the
// fourth is where it came from) for up to L levels.
// Space: O(L) for the recursion stack; the sentinel marking keeps the extra
// visited bookkeeping at O(1).

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];

console.log(exist(board, "ABCCED"));  // true
console.log(exist(board, "SEE"));     // true
console.log(exist(board, "ABCB"));    // false - would reuse the first B
console.log(exist(board, "ASA"));     // true - path can turn back on itself
console.log(exist([["a"]], "a"));     // true - single cell
