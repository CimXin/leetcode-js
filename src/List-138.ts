

import { ListNode } from "./Tool/ListNode";


function copyRandomList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    let dummy = new ListNode(-1);
    let prev = dummy.next;
    let newList = dummy;
    let temp = head;
    //老节点对应新节点
    let map1 = new Map<ListNode, ListNode>();
    //step1,创建普通新节点
    while (temp) {
        let newNode = new ListNode(temp.val + 100);
        if (prev) {
            prev.next = newNode;
        }
        newList.next = newNode;
        newList = newList.next;

        prev = newNode;
        map1.set(temp, newNode);
        temp = temp.next;
    }
    //step2，为新节点增加random的引用
    let newHead = dummy.next;
    while (head) {
        newHead.random = map1.get(head.random);

        head = head.next;
        newHead = newHead.next;
    }
    return dummy.next;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

node1.random = node3;
node2.random = node1;
node3.random = node2;

copyRandomList(node1);
