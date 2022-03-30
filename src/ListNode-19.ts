import { ListNode } from "./Tool/ListNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    //解法1 遍历一次链表，求得链表的长度，然后遍历到倒数第n个节点。

    //解法2 快慢指针
    let dummyHead = new ListNode(-1, head);

    let fast = dummyHead;
    let slow = dummyHead;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next ? slow.next.next : null;

    return dummyHead.next;
};

let listNode = ListNode.conver(
    [1, 2, 3, 4, 5]);

removeNthFromEnd(listNode, 2);
