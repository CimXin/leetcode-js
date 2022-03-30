import { TreeNode } from "./Tool/TreeNode";

function numTrees(n: number): number {
    return helper(1, n);
};

function helper(start: number, end: number) {
    let res = 0;
    if (start > end) {
        return res;
    }
    for (let i = start; i <= end; i++) {
        let leftNums = helper(start, i - 1);
        let rightNums = helper(i + 1, end);
        res += leftNums * rightNums;
    }
    console.error(res);
    return res;
}

// numTrees(3);
