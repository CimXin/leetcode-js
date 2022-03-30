import { ListNode } from "./Tool/ListNode";

function revese(head: ListNode) {

    let prev = null, temp = null;
    while (head) {
        temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
}

let node = ListNode.conver([1, 2, 3, 4]);
revese(node);