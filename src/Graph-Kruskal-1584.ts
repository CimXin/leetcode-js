import { Heap } from "./Tool/Heap";

class State {
    public constructor(public from: number, public to: number, public dis: number) { }
}
function minCostConnectPoints(points: number[][]): number {

    let heap = new Heap<State>((a: State, b: State) => {
        return a.dis < b.dis;
    });

    let uf = new UnionFind(points.length - 1);

    //创建邻接表
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let point1 = points[i];
            let point2 = points[j];
            let dis = Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
            heap.push(new State(i, j, dis));
        }
    }
    let size = points.length - 1;
    let ret = 0;
    while (heap.size > 0 && size > 0) {
        let state = heap.pop();
        if (!uf.connected(state.from, state.to)) {
            uf.union(state.from, state.to);
            ret += state.dis;
            size--;
        }
    }

    return ret;
};