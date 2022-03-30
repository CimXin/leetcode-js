import { ListNode } from "./Tool/ListNode";

class MinHeap {
    public datas: ListNode[] = [];

    public constructor(public compare: Function) {

    }

    public push(node: ListNode) {
        this.datas.push(node);
        this.heap_up(this.datas.length - 1);
    }

    public pop(): ListNode {
        let top = this.datas[0];
        this.swap(0, this.datas.length - 1);
        this.datas.pop();

        this.heap_down(0);
        return top;
    }

    public heap_down(index: number) {
        let size = this.datas.length;

        while (index < size) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let tempIndex = index;

            if (left < size && this.compare(this.datas[left], this.datas[tempIndex])) {//  this.datas[left].val < this.datas[tempIndex].val) {
                tempIndex = left;
            }

            if (right < size && this.compare(this.datas[right], this.datas[tempIndex])) {
                tempIndex = right;
            }

            if (tempIndex == index) {
                break;
            }
            this.swap(index, tempIndex);
            index = tempIndex;
        }
    }

    public heap_up(index: number) {
        // while (index < this.datas.length && this.compare(this.datas[index], this.datas[this.getParentIndex(index)])) {
        while (index < this.datas.length && this.compare(this.datas[index], this.datas[this.getParentIndex(index)])) {

            // this.datas[index] > this.datas[this.getParentIndex(index)]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }

    }

    public getParentIndex(index: number) {
        // return (index - 1) / 2 >> 0;
        return (index - 1) >> 1;
    }

    public swap(left: number, right: number) {
        let tem = this.datas[left];
        this.datas[left] = this.datas[right];
        this.datas[right] = tem;
    }

    public get size() {
        return this.datas.length;
    }
}


import { Heap } from "./Tool/Heap";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let heap1 = new MinHeap((a: ListNode, b: ListNode) => {
        console.error(a, b);
        return a.val < b.val;
    });
    let heap = new Heap<ListNode>((a: ListNode, b: ListNode) => {
        return a.val < b.val;
    });

    for (let list of lists) {
        while (list) {
            heap.push(new ListNode(list.val));
            heap1.push(new ListNode(list.val));
            list = list.next;
        }
    }

    let dummy = new ListNode(-1);
    let head = dummy;

    while (heap.size > 0) {
        let i = heap.pop();
        console.log(i.val);
        head.next = new ListNode(i.val);
        head = head.next;
    }
    return dummy.next;
};

let node1 = ListNode.conver([1, 4, 5]);
let node2 = ListNode.conver([1, 3, 4]);
let node3 = ListNode.conver([2, 6]);

mergeKLists([node1, node2, node3]);