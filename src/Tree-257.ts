import { TreeNode } from "./Tool/TreeNode";

function binaryTreePaths(root: TreeNode | null): string[] {
    //先序遍历吧
    preorder(root, []);
    return null;
};

let paths = [];
function preorder(root: TreeNode, path: number[]) {
    if (root == null) {
        return;
    }
    path.push(root.val);

    console.error(root.val, path);
    root.left && preorder(root.left, path);
    root.right && preorder(root.right, path);
    if (root.left == null && root.right == null) {
        paths.push(path.slice());
    }
    path.pop();
}

let node = TreeNode.conver([1, 2, 3, 4, 5, 6, 7]);
binaryTreePaths(node);