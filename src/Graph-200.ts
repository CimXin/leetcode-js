import { UnionFind } from "./Tool/UnionFind";

function numIslands(grid: string[][]): number {
    //解法 并查集
    let dirt = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let m = grid.length;
    let n = grid[0].length;
    //1,建立邻接表
    let index = 0;

    let graph1 = Array(m).fill(0).map(() => Array(n).fill(-1));
    // let edges = [];

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] != "0") {
                graph1[y][x] = index++;
            }
        }
    }
    let uf = new UnionFind(index);

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (graph1[y][x] == -1) {
                continue;
            }
            for (let d of dirt) {
                let nx = d[0] + x;
                let ny = d[1] + y;
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (graph1[ny][nx] != -1) {
                    if (!uf.connected(graph1[y][x], graph1[ny][nx])) {
                        uf.union(graph1[y][x], graph1[ny][nx]);
                    }
                }
            }
        }
    }

    return uf.count;
};

numIslands([
    // ["1", "1", "1", "1", "0"],
    // ["1", "1", "0", "1", "0"],
    // ["1", "1", "0", "0", "0"],
    // ["0", "0", "0", "0", "0"]
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]

])