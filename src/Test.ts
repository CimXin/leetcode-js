import { TreeNode } from "./Tool/TreeNode";

function isSymmetric(root: TreeNode | null): boolean {
    /**
        解法一 广度优先遍历，统计每层的元素，然后看每层元素是否对称
        解法二 将树拆成2个子树，然后左子树按照左中右方式遍历，右子树按照右中左方式遍历
     */
    if (!root) {
        return false;
    }

    return dfs(root.left, root.right);
};

function dfs(tree1: TreeNode, tree2: TreeNode) {

    if (!tree1 && !tree2) {
        return true;
    }
    if ((tree1 && !tree2) || (tree2 && !tree1)) {
        return false;
    }
    if (tree1.val != tree2.val) {
        return false;
    }

    let left = dfs(tree1.left, tree2.right);
    let right = dfs(tree1.right, tree2.left);
    return left && right;
}

// let node = TreeNode.conver([1, 2, 2, 3, 4, 4, 3]);
let node = TreeNode.conver([1, 2, 3]);
isSymmetric(node);