// let flag = false;
function exist(board: string[][], word: string): boolean {
    let m = board.length;
    let n = board[0].length;
    let flag = false;

    let mem = Array(m).fill(false).map(() => Array(n).fill(false));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; ++j) {
            flag = search(board, i, j, 0, word, mem);
            console.log(i, j, mem);
        }
    }
    return flag;
};
let dir = [[1, 0], [-1, 0], [0, -1], [0, 1]];
function search(board: string[][], i: number, j: number, x: number, word: string, mem: boolean[][]) {
    // console.log("search", i, j, x);
    if (board[i][j] != word.charAt(x)) {
        return false;
    } else if (x == word.length - 1) {
        return true;
    };
    let m = board.length;
    let n = board[0].length;
    mem[i][j] = true;
    let result = false;
    for (let d of dir) {
        let ii = i + d[0];
        let jj = j + d[1];
        if (ii < 0 || ii >= m || jj < 0 || jj >= n) continue;
        if (mem[ii][jj]) continue;
        // if (board[ii][jj] == word.charAt(x)) {
        let flag = search(board, ii, jj, x + 1, word, mem);
        if (flag) {
            result = true;
            break;
        }
        // }
    }
    mem[i][j] = false;
    return result;
}

exist([["A", "B"], ["C", "D"]], "AD");