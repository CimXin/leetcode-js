
class HashNode {
    constructor(public key: number, public value: number, public next: HashNode) {

    }
}
class MyHashMap {
    private hashArray: HashNode[];
    private size: number = 0;
    constructor() {
        this.size = 10;
        this.hashArray = Array(this.size).fill(null);
    }

    put(key: number, value: number): void {
        let index = this.getKey(key);
        let data = this.hashArray[index];

        while (data != null) {
            if (data.key == key) {
                data.value = value;
                return;
            }
            data = data.next;
        }

        let newNode = new HashNode(key, value, null);
        let iData = this.hashArray[index];
        newNode.next = iData;
        this.hashArray[index] = newNode;
    }

    get(key: number): number {
        let index = this.getKey(key);
        let data = this.hashArray[index];
        if (!data) {
            return -1;
        }
        while (data != null) {
            if (data.key == key) {
                return data.value;
            }
        }
    }

    remove(key: number): void {
        let index = this.getKey(key);
        let data = this.hashArray[index];
        if (data == null) return;
        let prev: HashNode = null;
        while (data != null) {
            if (data.key == key) {
                break;
            }
            prev = data;
            data = data.next;
        }
        if (data == null) {
            return;
        }
        if (prev != null) {
            prev.next = data.next;
        } else { //头节点
            this.hashArray[index] = data.next;
        }
        // return data.value;
    }

    private getKey(key: number) {
        return key % this.size;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var myHashMap = new MyHashMap();
myHashMap.put(1, 1);
myHashMap.put(11, 2);

myHashMap.remove(11);