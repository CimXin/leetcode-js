import { ListNode } from "./Tool/ListNode";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k == 0) return head;

    //1，计算链表的长度
    let len = 1;
    let temp1 = head;
    while (temp1.next != null) {
        temp1 = temp1.next;
        len++;
    }

    let add = len - k % len;
    if (len == add) return head;

    //2,构建环形链表
    temp1.next = head;

    while (add > 0) {
        add--;
        temp1 = temp1.next;
    }
    const ret = temp1.next;
    temp1.next = null;
    return ret;

};

let node = ListNode.conver([1, 2, 3, 4, 5]);
rotateRight(node, 2);