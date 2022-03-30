import { TreeNode } from "./Tool/TreeNode";

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (root == null) return [];
    let index = 0;  //0=从左往右 1=从右往左

    let queue = [root];
    let ret = [];
    while (queue.length > 0) {
        let size = queue.length;
        ret.push([]);

        for (let i = 0; i < size; i++) {
            let curNode = queue.shift()
            if (index == 0) {
                ret[ret.length - 1].push(curNode.val);
            } else {
                ret[ret.length - 1].unshift(curNode.val);
            }
            curNode.left && queue.push(curNode.left);
            curNode.right && queue.push(curNode.right);
        }
        index = index ^ 1;
    }

    return ret;
};

let node = TreeNode.conver([3, 9, 20, null, null, 15, 7]);
zigzagLevelOrder(node);