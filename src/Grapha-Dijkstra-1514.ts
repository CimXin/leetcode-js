import { Heap } from "./Tool/Heap";
class State {
    constructor(public id: number, public proFromStart: number) { }
}
function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
    //1,创建邻接表

    let graph = Array(n).fill(0).map(() => Array());
    for (let i = 0; i < edges.length; i++) {
        let node = edges[i];
        graph[node[0]].push([node[1], succProb[i]]);
        graph[node[1]].push([node[0], succProb[i]]);
    }

    let proTo = Array(n).fill(-1);
    proTo[start] = 1;

    let heap = new Heap<State>((a: State, b: State) => {
        return a.proFromStart > b.proFromStart;
    });
    heap.push(new State(start, 1));

    while (heap.size > 0) {
        let curState = heap.pop();
        let curNode = curState.id;
        let curPro = curState.proFromStart;

        if (curNode == end) {
            return curPro;
        }

        if (curPro < proTo[curNode]) continue;
        for (let i of graph[curNode]) {
            let nextNode = i[0];
            // let nextPro = curPro * i[1];
            let nextPro = proTo[curNode] * i[1];
            if (proTo[nextNode] < nextPro) {
                proTo[nextNode] = nextPro;
                heap.push(new State(nextNode, nextPro));
            }
        }

    }

    return 0;
};

maxProbability(
    3,
    [[0, 1], [1, 2], [0, 2]],
    [0.5, 0.5, 0.2],
    0,
    2,

    // 3,
    // [[0, 1], [1, 2], [0, 2]],
    // [0.5, 0.5, 0.3],
    // 0,
    // 2,

    // 3,
    // [[0, 1]],
    // [0.5],
    // 0,
    // 2
)