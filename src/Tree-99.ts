import { TreeNode } from "./Tool/TreeNode";

let errorOne = null;
let errorTwo = null;
let pre = null;
function recoverTree(root: TreeNode | null): void {

    inorder(root);
    console.error(errorOne, errorTwo);
    let temp = errorOne.val;
    errorOne.val = errorTwo.val;
    errorTwo.val = temp;
};

function inorder(root: TreeNode) {
    if (!root) return;

    inorder(root.left);

    if (pre && root.val <= pre.val) {
        errorTwo = root;
        if (!errorOne) {
            errorOne = pre;
        }
    }
    pre = root;
    inorder(root.right);
}

let node = TreeNode.conver([1, 2, 3]);
recoverTree(node);