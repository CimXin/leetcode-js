import { Heap } from "./Tool/Heap";
import { TreeNode } from "./Tool/TreeNode";

function closestKValues(root: TreeNode | null, target: number, k: number): number[] {

    let queue = [];
    let kArray = [];

    while (root != null || queue.length > 0) {
        while (root != null) {
            queue.push(root);
            root = root.left;
        }
        root = queue.pop();

        if (kArray.length == k) {
            if (Math.abs(kArray[0] - target) > Math.abs(root.val - target)) {
                kArray.shift();
                kArray.push(root.val);
            } else {
                break ;
            }
        } else {
            kArray.push(root.val);
        }

        root = root.right;
    }
    return kArray;
};
let node = TreeNode.conver([4, 2, 5, 1, 3]);
closestKValues(node, 3.714286, 2);