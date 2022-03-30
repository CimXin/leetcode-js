function bfs(graph: number[][], paths: number[][]) {
    let queue = [];
    let path = [0];
    queue.push(path);

    while (queue.length > 0) {
        let curPath = queue.shift();
        let node = curPath[curPath.length - 1];
        for (let nextNode of graph[node]) {
            curPath.push(nextNode);
            if (nextNode == graph.length - 1) {
                paths.push(curPath.slice());
            } else {
                queue.push(curPath.slice());
            }
            curPath.pop();
        }
    }
    return paths;
}

function allPathsSourceTarget(graph: number[][]): number[][] {
    let paths = [];
    if (graph == null || graph.length == 0) return paths;
    //解法1 dfs
    // dfs(graph, 0, [], paths);
    //解法2 bfs
    bfs(graph, paths);

    return paths;
};

allPathsSourceTarget([[1, 2], [3], [3], []]);