function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    if (numCourses == 1) return [0];

    let indegree = Array(numCourses).fill(0);
    // let graph = Array(numCourses).fill(0).map(() => new Array());
    for (let i of prerequisites) {
        indegree[i[0]]++;
        // graph[i[1]].push(i[0]);
    }

    let queue = [];
    indegree.forEach((v, i) => {
        if (v == 0) {
            queue.push(i);
        }
    });

    let res = [];
    while (queue.length > 0) {
        let cur = queue.pop();
        res.push(cur);
        for (let i of prerequisites) {
            if (i[1] == cur) {
                indegree[i[0]]--;
                if (indegree[i[0]] == 0) {
                    queue.push(i[0]);
                }
            }
        }
    }

    for (let i of indegree) {
        if (i != 0) {
            return [];
        }
    }
    return res;
};


findOrder(
    4,
    [[1, 0], [2, 0], [3, 1], [3, 2]]
);