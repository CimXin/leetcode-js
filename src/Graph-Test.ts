import { Heap } from "./Tool/Heap";
import { UnionFind } from "./Tool/UnionFind";

function minimumCost(n: number, connections: number[][]): number {
    // let heap = new Heap<number[]>((a: number[], b: number[]) => {
    //     return a[2] < b[2];
    // });

    // let disTo = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    // disTo[1] = 0;
    // disTo[0] = 0;

    // for (let i of connections) {
    //     heap.push(i);
    // }

    // let uf = new UnionFind(n);
    // let cost = 0;
    // let size = n - 1;
    // while (heap.size > 0 && size > 0) {
    //     let curNode = heap.pop();
    //     if (!uf.connected(curNode[0], curNode[1])) {
    //         uf.union(curNode[0], curNode[1]);
    //         cost += curNode[2];
    //         size--;
    //     }
    // }

    // if (uf.count > 1) {
    //     return -1;
    // }
    // return cost;

    //解法2 Prim算法
    let heap = new Heap<number[]>((a: number[], b: number[]) => {
        return a[1] < b[1];
    });
    let edges = Array(n + 1).fill(0).map(() => new Array());
    for (let i of connections) {
        edges[i[0]].push([i[1], i[2]]);
        edges[i[1]].push([i[0], i[2]]);
    }

    let visited = Array(n + 1).fill(false);
    let size = n;
    // visited[1] = true;

    heap.push([1, 0]);//[顶点,费用]

    let res = 0;
    while (heap.size > 0 && size > 0) {
        let curNode = heap.pop();
        let to = curNode[0];
        if (visited[to]) continue;
        visited[to] = true;
        console.error(curNode);
        res += curNode[1];

        for (let i of edges[to]) {
            if (!visited[i[0]]) {
                heap.push([i[0], i[1]]);
            }
        }
        size--;
    }

    if (size > 0) {
        return -1;
    }

    return res;
};

minimumCost(
    3,
    [[1, 2, 5], [1, 3, 6], [2, 3, 1]]

);