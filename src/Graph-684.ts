import { UnionFind } from "./Tool/UnionFind";

function findRedundantConnection(edges: number[][]): number[] {
    let uf = new UnionFind(edges.length);

    let res = null;
    for (let i of edges) {
        if (!uf.connected(i[0], i[1])) {
            uf.union(i[0], i[1]);
        } else {
            res = i;
        }
    }
    return res;

};