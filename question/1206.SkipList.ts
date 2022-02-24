class SkipListNode {
    val: number;
    next: SkipListNode;
    down: SkipListNode;
    constructor(val: number, next?: SkipListNode, down?: SkipListNode) {
        this.val = val;
        this.next = next;
        this.down = down;
    }
}

class Skiplist {
    head: SkipListNode;
    constructor() {
        this.head = new SkipListNode(-1);
    }

    /** 返回target是否存在与跳表中 */
    search(target: number): boolean {
        let node = this.head;
        while (node) {
            while (node.next && node.next.val < target) {
                node = node.next;
            }
            if (node.next && node.next.val == target) {
                return true;
            }
            node = node.down;
        }
        return false;
    }

    /** 插入一个元素到跳表中 */
    add(num: number): void {
        let nodes = [];
        let node = this.head;

        while (node) {
            while (node.next && node.next.val < num) {
                node = node.next;
            }
            nodes.push(node);
            node = node.down;
        }

        let insert = true;
        let down = null;

        while (insert && nodes.length > 0) {
            node = nodes.pop();
            node.next = new SkipListNode(num, node.next, down);
            down = node.next;
            insert = Math.random() > 0.5;
        }

        if (insert) {
            this.head = new SkipListNode(-1, null, this.head);
        }
    }

    /** 在跳表中删除一个值，如果num不存在，直接返回false,如果存在多个num,删除其中任意一个即可 */
    erase(num: number): boolean {
        let node = this.head;
        let found = false;
        while (node) {
            while (node.next && node.next.val < num) {
                node = node.next;
            }
            if (node.next && node.next.val == num) {
                node.next = node.next.next;
                found = true;
            }
            node = node.down;
        }
        return found;
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */