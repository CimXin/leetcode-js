import { TreeNode } from "./Tool/TreeNode";

function flatten(root: TreeNode | null): void {
    let list = Array<TreeNode>();
    preorder(root, list);
    console.error(list);
    for (let i = 1; i < list.length; i++) {
        let prev = list[i - 1];
        let cur = list[i];
        prev.left = null;
        prev.right = cur;
    }
    console.error(root);
};

function preorder(root: TreeNode, list: TreeNode[]) {
    if (root == null) return;
    console.log(root.val);
    list.push(root);
    preorder(root.left, list);
    preorder(root.right, list);
}

let node = TreeNode.conver([1, 2, 5, 3, 4, null, 6]);
flatten(node);