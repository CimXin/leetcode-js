import { TreeNode } from "./Tool/TreeNode";

function rightSideView(root: TreeNode | null): number[] {


    let queue = [root];
    let res = [];
    while (queue.length > 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            if (i == size - 1) {
                res.push(node.val);
            }
        }
    }

    return res;

};
let node = TreeNode.conver([1, 2, 3, null, null, 4])
rightSideView(node);