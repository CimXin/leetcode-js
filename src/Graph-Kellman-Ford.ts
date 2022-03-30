// function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
//     //Bellman-Ford算法 -基础
//     let inf = Number.MAX_SAFE_INTEGER;
//     // let graph = Array(n).fill(inf).map(() => Array(n).fill(inf));
//     // for (let i of flights) {
//     //     graph[i[0]][i[1]] = i[2];
//     // }

//     let prev = Array(n).fill(inf);
//     prev[src] = 0;

//     let cur = Array(n).fill(inf);

//     for (let i = 0; i < k + 1; i++) {
//         cur[src] = 0;
//         for (let f of flights) {
//             let from = f[0];
//             let to = f[1];
//             let cost = f[2];

//             if (prev[from] < inf) {
//                 cur[to] = Math.min(cur[to], prev[from] + cost);
//             }
//         }

//         prev = cur.slice(0);
//     }
//     return cur[dst] == inf ? -1 : cur[dst];
// };

findCheapestPrice(3,
    [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0);

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let inf = Number.MAX_SAFE_INTEGER;
    let prev = Array(n).fill(inf);
    prev[src] = 0;
    let cur = prev.slice(0);

    for (let j = 0; j < k + 1; j++) {
        for (let i of flights) {
            if (prev[i[0]] < inf) {
                cur[i[1]] = Math.min(cur[i[1]], prev[i[0]] + i[2]);
            }
        }
        prev = cur.slice(0);
    }
    return cur[dst] == inf ? -1 : cur[dst];
};
// findCheapestPrice(0,
//     [], 0, 0, 0);