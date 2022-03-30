function findOrder(numCourses: number, prerequisites: number[][]): number[] {

    let indregee = Array(numCourses).fill(0);
    for (let i of prerequisites) {
        indregee[i[0]] += 1;
    }

    let queue = [];
    for (let i = 0; i < indregee.length; i++) {
        if (indregee[i] == 0) {
            queue.push(i);
        }
    }
    let result = Array(numCourses).fill(0);
    let index = 0;
    while (queue.length > 0) {
        let course = queue.pop();
        result[index] = course;
        index++;
        for (let i of prerequisites) {
            if (i[1] == course) {
                indregee[i[0]]--;
                if (indregee[i[0]] == 0) {
                    queue.push(i[0]);
                }
            }
        }
    }

    for (let i of indregee) {
        if (i != 0) {
            return [];
        }
    }

    return result;
};


findOrder(
    4,
    [[1, 0], [2, 0], [3, 1], [3, 2]]
);