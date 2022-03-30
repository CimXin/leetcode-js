function minimumSemesters(n: number, relations: number[][]): number {

    let indegree = Array(n).fill(0);

    let graph = Array(n).fill(0).map(() => new Set<number>());
    for (let i of relations) {
        indegree[i[1] - 1]++;
        graph[i[0] - 1].add(i[1] - 1);
        graph[i[1] - 1].add(i[0] - 1);
    }

    let queue = [];
    let path = []
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0) {
            path.push(i);
        }
    }
    queue.push(path);

    let term = 1;
    while (queue.length > 0) {
        let curPath = queue.pop();

        for (let i of curPath) {
            indegree[i]--;
            for (let j of graph[i]) {
                graph[j].delete(i);
                indegree[j]--;
            }
        }

        let path = []
        for (let i = 0; i < indegree.length; i++) {
            if (indegree[i] == 0) {
                path.push(i);
            }
        }
        if (path.length > 0) {
            queue.push(path);
            term++;
        }
    }

    for (let i of indegree) {
        if (i != -1) {
            return -1;
        }
    }
    return term;
};

minimumSemesters(
    // 3,
    // [[1, 3], [2, 3]]
    3,
    [[1,2],[2,3],[3,1]]
)