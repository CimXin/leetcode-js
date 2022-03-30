import { TreeNode } from "./Tool/TreeNode";

function connect(root: TreeNode | null): TreeNode | null {
    if (!root) return root;

    //解法1 -正常的bfs
    // let queue = [];
    // queue.push(root);

    // while (queue.length > 0) {
    //     let size = queue.length;

    //     for (let i = 0; i < size; i++) {
    //         let curNode = queue.shift();
    //         if (i != size - 1) {
    //             curNode.next = queue[0];
    //         }

    //         if (curNode.left) {
    //             queue.push(curNode.left);
    //         }
    //         if (curNode.right) {
    //             queue.push(curNode.right);
    //         }
    //     }
    // }

    //解法2
    let leftNode = root;
    // let dummyNode = new Node(-1);

    while (leftNode != null) {
        let curNode = leftNode;
        let nextFirstNode = null;
        while (curNode != null) {
            if (curNode.left != null) {
                curNode.left.next = curNode.right || null;
            }
            if (nextFirstNode == null) {
                nextFirstNode = (curNode.left || curNode.right) || null;
            }
            if (curNode.next != null) {
                let pre = curNode.right || curNode.left
                if (pre != null) {
                    pre.next = (curNode.next.left || curNode.next.right) || null;
                }
            }
            curNode = curNode.next;
        }

        leftNode = nextFirstNode;
    }

    return root;
};
let node = TreeNode.conver([1, 2, 3, 4, 5, null, 7]);//[1, 2, 3, 4, 5, 6, 7]);
connect(node);
