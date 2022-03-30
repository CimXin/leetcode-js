import { Heap } from "./Tool/Heap";
class State {
    public constructor(public to: number, public price: number, public transferTimes: number) { }
}
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {

    let graph = Array(n).fill(0).map(() => Array());

    for (let i of flights) {
        graph[i[0]].push([i[1], i[2]]);
    }

    let heap = new Heap<State>((a: State, b: State) => {
        return a.price < b.price;
    });
    heap.push(new State(src, 0, 0));

    let priceTo = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let nodeNumTo = Array(n).fill(Number.MAX_SAFE_INTEGER);

    // let kIndex = 0;
    k++;
    while (heap.size > 0) {
        let curState = heap.pop();
        let curNode = curState.to;
        let curPrice = curState.price;
        let curTimes = curState.transferTimes;

        if (curNode == dst) {
            return curPrice;
        }

        if (curTimes == k) continue;

        for (let g of graph[curNode]) {
            let nextNode = g[0];
            let nextPrice = g[1] + curPrice;
            let nextTransferTimes = curTimes + 1;

            if (nextPrice < priceTo[nextNode]) {
                priceTo[nextNode] = nextPrice;
                nodeNumTo[nextNode] = nextTransferTimes;
            }
            if (nextPrice > priceTo[nextNode] && nextTransferTimes > nodeNumTo[nextNode]) {
                continue;
            }
            heap.push(new State(nextNode, nextPrice, nextTransferTimes));
        }
    }

    return priceTo[dst] >= Number.MAX_SAFE_INTEGER ? -1 : priceTo[dst];
};

findCheapestPrice(
    // 3,
    // [[0, 1, 100], [1, 2, 100], [0, 2, 500]],
    // 0,
    // 2,
    // 0,
    // 3,
    // [[0,1,100],[1,2,100],[0,2,500]],
    // 0,
    // 2,
    // 0,

    // 4,
    // [[0, 1, 1], [0, 2, 5], [1, 2, 1], [2, 3, 1]],
    // 0,
    // 3,
    // 1

    // 3,
    // [[0, 1, 100], [1, 2, 100], [0, 2, 500]],
    // 0,
    // 2,
    // 1,


    5,
    [[0, 1, 5], [1, 2, 5], [0, 3, 2], [3, 1, 2], [1, 4, 1], [4, 2, 1]],
    0,
    2,
    2
)