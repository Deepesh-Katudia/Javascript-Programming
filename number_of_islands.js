/*
200. Number of Islands

Given an m x n 2D binary grid where:
  '1' represents land
  '0' represents water

Return the number of islands.

An island is surrounded by water and is formed by connecting
adjacent lands horizontally or vertically.

You may assume all four edges of the grid are surrounded by water.

Example 1:

Input:
grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input:
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'
*/

var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== '1') return;

        grid[r][c] = '0';

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islands++;
                dfs(r, c);
            }
        }
    }

    return islands;
};
