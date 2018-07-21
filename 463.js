
//Q： https://leetcode-cn.com/problems/island-perimeter/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    var allLens = 0;
    var mLens = grid.length;
    for (var m = 0; m < mLens; ++m) {
        var nLens = grid[m].length;
        for (var n = 0; n < nLens; ++n) {
            var data = grid[m][n];
            if (data == 1) {
                allLens += 4 - checkBorderNum(m, n, mLens, nLens, grid);
            }
        }
    }
    return allLens;
};

var checkBorderNum = function (m, n, mLens, nLens, grid) {
    var lens = 0;
    if (n - 1 >= 0) {
        lens += grid[m][n - 1];
    }
    if (n + 1 < nLens) {
        lens += grid[m][n + 1];
    }
    if (m - 1 >= 0) {
        lens += grid[m - 1][n];
    }
    if (m + 1 < mLens) {
        lens += grid[m + 1][n];
    }
    return lens;
}

var result = islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]);
console.log(result);