
export class ListNode {
    val: number;
    next: ListNode | null;
    prev: ListNode | null;
    random:ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    static conver(nums: number[]) {
        let node = new ListNode(-1);

        let temp = node;
        for (let i of nums) {
            let node = new ListNode(i);
            temp.next = node;
            temp = temp.next;
        }
        return node.next;
    }
}
