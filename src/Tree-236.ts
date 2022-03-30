import { TreeNode } from "./Tool/TreeNode";

function lowestCommonAncestor(root: TreeNode | null, p: number | null, q: number | null): TreeNode | null {
    let res = null;

    while (true) {
        if (find(root.left, p) && find(root.left, p)) {
            root = root.left;
        } else if (find(root.right, p) && find(root.right, p)) {
            root = root.right;
        } else {
            res = root;
            break;
        }
    }
    return res;
};

function find(root: TreeNode, target: number) {
    if (!root) return false;
    if (root.val == target) {
        return true;
    }
    return find(root.left, target) || find(root.right, target);
}


function findPath(root: TreeNode, target: number, path: TreeNode[]) {

    if (root.val == target) {
        path.push(root);
    }
    if (find(root.left, target)) {
        path.push(root);
        findPath(root.left, target, path);
    }
    if (find(root.right, target)) {
        path.push(root);
        findPath(root.right, target, path);
    }
}


function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};


let node = TreeNode.conver([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
// lowestCommonAncestor(node, 5, 4);
maxDepth(node);