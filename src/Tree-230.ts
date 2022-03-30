import { TreeNode } from "./Tool/TreeNode";


let ans = 0;
let step = 0;
function kthSmallest(root: TreeNode | null, k: number): number {
    //思路 中序遍历

    // inorder(root, k);
    // console.error(ans);
    // return null;

    let queue = [];

    while (root != null || queue.length > 0) {
        while (root != null) {
            queue.push(root);
            root = root.left;
        }
        root = queue.pop();
        console.error(root.val);
        if (++step == k) {
            ans = root.val;
        }
        root = root.right;
    }

    console.error(queue);

    return ans;
};

function inorder(root: TreeNode, k: number) {
    // if (!root) return;
    if (step > k) {
        return;
    }
    root.left && inorder(root.left, k);

    step++;
    if (step == k) {
        ans = root.val;
    }
    console.error(step, root.val);
    root.right && inorder(root.right, k);

}

let node = TreeNode.conver([5, 3, 6, 2, 4, null, null, 1]);
kthSmallest(node, 3);