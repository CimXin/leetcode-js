class LRUCache {
    public cacheList: DoubleLinkList;
    public cachaMap: Map<number, LinkNode>;
    public size: number;
    constructor(capacity: number) {
        this.size = capacity;
        this.cacheList = new DoubleLinkList();
        this.cachaMap = new Map();
    }

    get(key: number): number {
        if (!this.cachaMap.has(key)) return -1;

        let val = this.cachaMap.get(key).val;
        this.put(key, val);

        return val;
    }

    put(key: number, value: number): void {
        let newNode = new LinkNode(key, value);

        //去重
        if (this.cachaMap.has(key)) {
            let oldNode = this.cachaMap.get(key);
            this.cacheList.delete(oldNode);
        }

        this.cachaMap.set(key, newNode);
        this.cacheList.addFirst(newNode);

        if (this.cachaMap.size > this.size) {
            //删除最后一个节点
            let k = this.cacheList.deleteLast();
            this.cachaMap.delete(k);
        }
    }
}

class LinkNode {
    public key: number;
    public val: number;
    public prev: LinkNode;
    public next: LinkNode;
    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
    }
}

class DoubleLinkList {
    public head: LinkNode;
    public tail: LinkNode;

    public constructor() {
        this.head = new LinkNode(0, 0);
        this.tail = new LinkNode(-1, -1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    public addFirst(newNode: LinkNode) {

        newNode.next = this.head.next;
        newNode.prev = this.head;

        this.head.next.prev = newNode;
        this.head.next = newNode;

    }

    public delete(node: LinkNode) {
        let key = node.key;

        node.next.prev = node.prev;
        node.prev.next = node.next;

        return key;
    }

    public deleteLast(): number {
        if (this.head.next == this.tail) return -1;

        let key = this.delete(this.tail.prev);
        return key;
    }
}

let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
let g = lru.get(1);
console.log(g);
lru.put(3, 3);
g = lru.get(2);
console.log(g);

