import { Heap } from "./Tool/Heap";
import { TreeNode } from "./Tool/TreeNode";

function closestKValues(root: TreeNode | null, target: number, k: number): number[] {

    let heap = new Heap<number[]>((a: number[], b: number[]) => {
        return a[1] < b[1];
    });

    inorder(root, target, heap);

    let res = [];
    while (heap.size > 0 && k > 0) {
        let data = heap.pop();
        res.push(data[0])
        k--;
    }
    return res;
};

function inorder(root: TreeNode, target: number, heap: Heap<any>) {
    if (root == null) return;
    inorder(root.left, target, heap);
    heap.push([root.val, Math.abs(root.val - target)]);
    inorder(root.right, target, heap);
}

let node = TreeNode.conver([4, 2, 5, 1, 3]);
closestKValues(node, 3.714286, 1);