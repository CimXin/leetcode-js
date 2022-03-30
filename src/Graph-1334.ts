import { Heap } from "./Tool/Heap";

function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {

    //解法1：Dijkstra算法
    let graph = Array(n).fill(0).map(() => new Array());
    for (let i of edges) {
        graph[i[0]].push([i[1], i[2]]);
        graph[i[1]].push([i[0], i[2]]);
    }
    // let paths = Array(n).fill(0);
    let count = Number.MAX_SAFE_INTEGER;
    let id = -1;
    for (let i = 0; i < n; i++) {
        let path = dijkstra(graph, i, distanceThreshold);
        if (path.length <= count) {
            count = path.length;
            id = Math.max(id, i);
        }
    }

    return id;
};

function dijkstra(graph: any[][], start: number, maxDistance: number) {
    let disTo = Array(graph.length).fill(Number.MAX_SAFE_INTEGER);
    disTo[start] = 0;

    let heap = new Heap<number[]>((a: number[], b: number[]) => {
        return a[1] < b[1];
    });

    for (let i of graph[start]) {
        heap.push(i);
    }
    let path = [];
    let visited = Array(graph.length).fill(false);
    visited[start] = true;
    while (heap.size > 0 && maxDistance > 0) {
        let cur = heap.pop();
        let curTo = cur[0];
        let dis = cur[1];
        if (visited[curTo]) {
            continue;
        }
        visited[curTo] = true;
        if (dis <= maxDistance) {
            path.push(curTo);
            // path++;
        }

        for (let i of graph[curTo]) {
            let nextTo = i[0];
            let nextDis = i[1] + dis;
            if (!visited[nextTo] && nextDis < disTo[nextTo] && nextDis <= maxDistance) {
                disTo[nextTo] = nextDis;
                heap.push([nextTo, nextDis]);
            }
        }
    }
    return path;
}

findTheCity(
    // 4, [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]], 4

    5,
    [[0, 1, 2], [0, 4, 8], [1, 2, 3], [1, 4, 2], [2, 3, 1], [3, 4, 1]],
    2
);