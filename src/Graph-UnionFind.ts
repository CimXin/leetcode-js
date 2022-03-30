
class QuickUnion {
    public root: number[];
    public constructor(size: number) {
        this.root = new Array(size);
        for (let i = 0; i < size; i++) {
            this.root[i] = i;
        }
    }
    public union(node1: number, node2: number) { //时间复杂度O(H)
        let root1 = this.find(node1);
        let root2 = this.find(node2);
        if (root1 != root2) {
            this.root[root2] = root1;
        }
    }

    /** 找到当前节点的根节点 */
    public find(node: number) {//时间复杂度O(H) H为树的高度 最坏的情况是O(N)
        // while (node != this.root[node]) {
        //     node = this.root[node];
        // }
        // return node;
        if (node == this.root[node]) {   //路径压缩
            return node;
        }
        return this.root[node] = this.find(this.root[node]);
    }
    public connected(node1: number, node2: number): boolean {//时间复杂度O(H)
        return this.find(node1) == this.find(node2);
    }
}
//按秩合并
class QuickUnion1 {
    public root: number[];
    public height: number[]; //树的高度
    public constructor(size: number) {
        this.root = new Array(size);
        this.height = new Array(size);
        for (let i = 0; i < size; i++) {
            this.root[i] = i;
            this.height[i] = 1;
        }
    }
    public union(node1: number, node2: number) { //时间复杂度O(logN)
        let root1 = this.find(node1);
        let root2 = this.find(node2);
        if (root1 != root2) {
            if (this.height[root1] > this.height[root2]) {
                this.root[root2] = root1;
            } else if (this.height[root1] < this.height[root2]) {
                this.root[root1] = root2;
            } else {
                this.root[root2] = root1;
                this.height[root1] += 1;  //root1的高度+1
            }
        }
    }

    /** 找到当前节点的根节点 */
    public find(node: number) {//时间复杂度O(logN)
        while (node != this.root[node]) {
            node = this.root[node];
        }
        return node;
    }
    public connected(node1: number, node2: number): boolean {//时间复杂度O(logN)
        return this.find(node1) == this.find(node2);
    }
}

class QuickFind {
    public root: number[];
    public constructor(size: number) {
        this.root = new Array(size);
        for (let i = 0; i < size; i++) {
            this.root[i] = i;
        }
    }
    public find(node: number): number { //时间复杂度O(1)
        return this.root[node];
    }
    public union(node1: number, node2: number) {//时间复杂度O(N)
        let root1 = this.find(node1);
        let root2 = this.find(node2);
        if (root1 == root2) {
            return;
        }
        //此时将根节点是node2的所有节点的根节点改变为node1的根节点
        for (let i = 0; i < this.root.length; i++) {
            if (this.root[i] == root2) {
                this.root[i] = root1;
            }
        }
    }
    public connected(node1: number, node2: number): boolean {//时间复杂度O(1)
        return this.find(node1) == this.find(node2);
    }
}


function test() {
    // let quickFind = new QuickFind(10);
    // quickFind.union(1, 2);
    // quickFind.union(2, 5);
    // quickFind.union(5, 6);
    // quickFind.union(6, 7);
    // quickFind.union(3, 8);
    // quickFind.union(8, 9);

    // console.error(quickFind.root);
    // console.error(quickFind.connected(1, 5));
    // console.error(quickFind.connected(5, 7));
    // console.error(quickFind.connected(4, 9));
    // quickFind.union(9, 4);
    // console.error(quickFind.root);
    // console.error(quickFind.connected(4, 9));

    let uf = new QuickUnion(10);
    // 1-2-5-6-7 3-8-9 4
    uf.union(1, 2);
    uf.union(2, 5);
    uf.union(5, 6);
    uf.union(6, 7);
    uf.union(3, 8);
    uf.union(8, 9);
    console.log(uf.connected(1, 5)); // true
    console.log(uf.connected(5, 7)); // true
    console.log(uf.connected(4, 9)); // false
    // 1-2-5-6-7 3-8-9-4
    uf.union(9, 4);
    console.log(uf.connected(4, 9)); // true
}
test();