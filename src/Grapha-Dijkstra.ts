import { Heap } from "./Tool/Heap";

class State {
    constructor(public id: number, public distFromStart: number) {

    }
}
function networkDelayTime(times: number[][], n: number, k: number): number {

    //1，创建邻接表
    let graph = Array(n + 1).fill(0).map(() => Array());

    for (let t of times) {
        let from = t[0];
        let to = t[1];
        let w = t[2];
        graph[from].push([to, w]);
    }
    let disTo = dijkstra(k, graph);

    //找到最短路径中最长的一条
    let res = Math.max(...disTo);

    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

function dijkstra(start: number, graph: any[][]): number[] {
    let disTo = Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
    disTo[0] = 0;
    disTo[start] = 0;

    let heap = new Heap<State>((a: State, b: State) => {
        return a.distFromStart < b.distFromStart;
    });

    heap.push(new State(start, 0));

    while (heap.size > 0) {
        let curState = heap.pop();
        let curNode = curState.id;
        let curDis = curState.distFromStart;
        if (curDis > disTo[curNode]) { continue; }

        for (let next of graph[curNode]) {
            let nextNode = next[0];
            let disToNext = next[1] + disTo[curNode];

            if (disTo[nextNode] > disToNext) {
                disTo[nextNode] = disToNext;
                heap.push(new State(nextNode, disToNext));
            }
        }
    }
    return disTo;
}

networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2);