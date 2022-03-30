/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "./Tool/TreeNode";

function rob(root: TreeNode | null): number {
    if (root == null) return 0;
    //解法一 广度优先遍历
    let queue = [root];
    let res = [];

    while (queue.length > 0) {
        let size = queue.length;
        let money = 0;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            money += node.val;
        }
        res.push(money);
    }

    if (res.length <= 1) {
        return res.length == 0 ? 0 : res[0];
    }
    let money = Math.max(res[0], res[1]);
    let dp = new Array(res.length).fill(0);

    for (let i = 0; i < res.length; i++) {
        if (i == 0) {
            dp[i] = res[i]; continue;
        }
        if (i == 1) {
            dp[i] = Math.max(res[i - 1], res[i]); continue;
        }
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + res[i]);
        money = Math.max(money, dp[i]);
    }

    return money;
};
let node = TreeNode.conver([2, 1, 3, null, 4]);
rob(node);