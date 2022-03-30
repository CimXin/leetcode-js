import { TreeNode } from "./Tool/TreeNode";

let ans = 0;
let delta = 0;
function closestValue(root: TreeNode | null, target: number): number {
    ans = delta = 0;
    delta = Number.MAX_SAFE_INTEGER;
    
    inorder(root, target);
    return ans;
};

function inorder(root: TreeNode, target: number) {
    root.left && inorder(root.left, target,);

    if (Math.abs(target - root.val) < delta) {
        delta = Math.abs(target - root.val);
        ans = root.val;
    }
    root.right && inorder(root.right, target);

}
let node = TreeNode.conver([2, 1, 3]);
closestValue(node,
    0.142857);