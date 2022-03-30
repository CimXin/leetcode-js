function findWhetherExistsPath(n: number, graph: number[][], start: number, target: number): boolean {
    //1,建立邻接表，由于存在平行边，如果不能用数组，使用map去重
    //解法1 dfs
    let graphMap = new Map<number, Set<number>>();

    for (let i of graph) {
        if (!graphMap.has(i[0])) {
            graphMap.set(i[0], new Set());
        }
        graphMap.get(i[0]).add(i[1]);
    }
    // return dfs(start, target, graphMap);

    //解法2 bfs
    //1,创建邻接表

    console.error(1);

    let visited = Array(n).fill(false);

    let queue = [start];
    while (queue.length > 0) {
        let curNode = queue.pop();
        if (visited[curNode]) continue;
        visited[curNode] = true;

        let nexts = graphMap.get(curNode);
        if (nexts) {
            for (let nextNode of nexts) {
                if (nextNode == target) {
                    return true;
                }
                if (!visited[nextNode]) {
                    queue.push(nextNode);
                }
            }
        }

    }

    return false;
};


function bfs() {

}


function dfs(start: number, target: number, graphMap: Map<number, Set<number>>) {
    if (start == target) {
        return true;
    }
    let nexts = graphMap.get(start);
    if (nexts) {
        for (let i of nexts) {
            if (dfs(i, target, graphMap)) {
                return true;
            }
        }
    }
    return false;
}

findWhetherExistsPath(
    5,
    [[0, 1], [0, 2], [0, 4], [0, 4], [0, 1], [1, 3], [1, 4], [1, 3], [2, 3], [3, 4]],
    0, 4
    // 12,
    // [[0, 1], [1, 2], [1, 3], [1, 10], [1, 11], [1, 4], [2, 4], [2, 6], [2, 9], [2, 10], [2, 4], [2, 5], [2, 10], [3, 7], [3, 7], [4, 5], [4, 11], [4, 11], [4, 10], [5, 7], [5, 10], [6, 8], [7, 11], [8, 10]],
    // 2,
    // 3,

    // 3, [[0, 1], [0, 2], [1, 2], [1, 2]], 0, 2

);
// findCheapestPrice


function test() {
    let set = new Set<number>();
    set.add(1);
    set.add(2);
    set.add(2);
    set.add(3);
    set.add(4);
    console.error(set);

    for (let i of set) {
        console.error(i);
    }
    console.error(1);
}

// test();