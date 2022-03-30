import { Heap } from "./Tool/Heap";

class State {
    public constructor(public from: number, public to: number, public dis: number) { }
}

function minCostConnectPoints(points: number[][]): number {

    let heap = new Heap<State>((a: State, b: State) => {
        return a.dis < b.dis;
    });

    let size = points.length - 1;

    let visited = Array(size).fill(false);
    visited[0] = true;

    for (let i = 1; i < points.length; i++) {
        let point1 = points[0];
        let point2 = points[i];
        let dis = Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
        heap.push(new State(0, i, dis));
    }

    let ret = 0;
    while (heap.size > 0 && size > 0) {
        let state = heap.pop();
        let to = state.to;
        if (visited[to]) continue;
        visited[to] = true;
        ret += state.dis;

        for (let i = 0; i < points.length; i++) {
            if (!visited[i]) {
                let point1 = points[to];
                let point2 = points[i];
                let dis = Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
                heap.push(new State(to, i, dis));
            }
        }
        size--;
    }
    return ret;
};