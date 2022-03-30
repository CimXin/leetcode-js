import { Heap } from "./Tool/Heap";

class State {
    constructor(public x: number, public y: number, public effFromStart: number) { }
}
function minimumEffortPath(heights: number[][]): number {
    //1，创建邻接表
    let m = heights.length; let n = heights[0].length;

    let effortTo = Array(m).fill(Number.MAX_SAFE_INTEGER).map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));
    effortTo[0][0] = 0;

    let heap = new Heap<State>((a: State, b: State) => {
        return a.effFromStart < b.effFromStart;
    });

    heap.push(new State(0, 0, 0));

    while (heap.size > 0) {
        let curState = heap.pop();
        let curX = curState.x;
        let curY = curState.y;
        let curEffFromStart = curState.effFromStart;

        if (curX == m - 1 && curY == n - 1) {
            return curEffFromStart;
        }

        if (curEffFromStart > effortTo[curX][curY]) continue;
        let graph = getGraph(heights, curX, curY);
        for (let next of graph) {
            let nextX = next[0];
            let nextY = next[1];
            //计算到下个点的消耗
            let effToNextNode = Math.max(effortTo[curX][curY], Math.abs(heights[curX][curY] - heights[nextX][nextY]));
            if (effToNextNode < effortTo[nextX][nextY]) {
                effortTo[nextX][nextY] = effToNextNode;
                heap.push(new State(nextX, nextY, effToNextNode));
            }
        }
    }

    return -1;
};

function getGraph(heights: number[][], x: number, y: number): number[] {
    let m = heights.length; let n = heights[0].length;
    let graph = [];
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];//四个方向

    for (let i of dir) {
        let nx = i[0] + x;
        let ny = i[1] + y;
        if (nx >= m || nx < 0 || ny >= n || ny < 0) continue;
        graph.push([nx, ny]);
    }
    return graph;
}
minimumEffortPath(
    // [[1, 2, 2], [3, 8, 2], [5, 3, 5]]
    // [[1, 2, 3], [3, 8, 4], [5, 3, 5]]
    [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]]
)