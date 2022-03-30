import { TreeNode } from "./Tool/TreeNode";

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    let inorderMap = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    return buildTree1(0, inorder.length - 1, postorder, 0, postorder.length - 1, inorderMap);
};

function buildTree1(inLeft: number, inRight: number, postorder: number[], postL: number, postR: number, inorderMap) {
    if (inLeft > inRight || postL > postR) {
        return null;
    }
    let pIndex = inorderMap.get(postorder[postR]);
    let root = new TreeNode(postorder[postR]);

    root.left = buildTree1(inLeft, pIndex - 1, postorder, postL, postL + pIndex - inLeft - 1, inorderMap);
    root.right = buildTree1(pIndex + 1, inRight, postorder, postL + pIndex - inLeft, postR - 1, inorderMap);

    return root;
}

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);