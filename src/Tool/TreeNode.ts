export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    next: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = null;
    }

    static conver(array: number[]) {
        let floor = 0, count = 0;
        let treeNodes = new Array<TreeNode>(array.length);
        while (array != null && count < array.length) {
            let start = Math.pow(2, floor) - 1;
            let end = Math.pow(2, floor + 1) - 1;
            if (end > array.length) {
                end = array.length;
            }
            for (let i = start; i < end; i++) {
                if (array[i] != null) {
                    treeNodes[i] = new TreeNode(array[i]);
                } else {
                    treeNodes[i] = null;
                }
                if (i > 0) {
                    let parent = (i - 1) / 2 >> 0;
                    if (parent >= 0) {
                        let pNode = treeNodes[parent];
                        if (pNode != null) {
                            if (i % 2 == 1) {
                                pNode.left = treeNodes[i];
                            } else {
                                pNode.right = treeNodes[i];
                            }
                        }
                    }
                }
                count++;
            }
            floor++;
        }
        return treeNodes[0]
    }
}

//二叉树的前中后迭代写法
{
    let queue = [];
    let path = [];
    let node = null;

    {
        //前序遍历
        while (queue.length > 0 || node != null) {
            while (node) {
                path.push(node.val);
                queue.push(node);
                node = node.left;
            }
            node = queue.pop();
            node = node.right;
        }
    }

    {
        //中序遍历
        while (queue.length > 0 || node != null) {
            while (node) {
                queue.push(node);
                node = node.left;
            }
            node = queue.pop();
            path.push(node.val);
            node = node.right;
        }
    }

    {
        //后序遍历
        let prev = null;
        while (queue.length > 0 || node != null) {
            while (node) {
                queue.push(node);
                node = node.left;
            }
            node = queue.pop();
            if (node.right == null || node.right == prev) {
                path.push(node.val);
                prev = node;
                node = null;
            } else {
                queue.push(node);
                node = node.right;
            }
        }
    }
}
