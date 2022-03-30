import { TreeNode } from "./Tool/TreeNode";
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
let prev = null;
function isValidBST(root: TreeNode | null): boolean {
    if (root == null) return true;

    // return inorder(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    return inorder1(root, null);
};

function inorder(root: TreeNode, min: number, max: number) {
    if (!root) return true;

    // 解法1
    if (root.val <= min || root.val >= max) {
        return false;
    }
    return inorder(root.left, min, root.val) && inorder(root.right, root.val, max);
}

function inorder1(root: TreeNode, lastNode: TreeNode) {
    if (root == null) return true;
    //解法2 
    if (!inorder1(root.left, lastNode)) {
        return false;
    }
    if (lastNode && root.val <= lastNode.val) {
        return false;
    }
    lastNode = root;
    return inorder1(root.right, lastNode);
}


// let node = TreeNode.conver([5, 4, 6, null, null, 3, 7]);
let node = TreeNode.conver([1, 1]);
isValidBST(node);