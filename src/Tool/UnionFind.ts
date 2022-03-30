
export class UnionFind {
    public root: number[];
    public height: number[];
    public count: number;
    public constructor(size) {
        this.count = size;
        this.root = Array(size);
        this.height = Array(size);
        for (let i = 0; i < size; i++) {
            this.root[i] = i;
            this.height[i] = 1;
        }
    }
    public connected(i, j) {
        return this.find(i) == this.find(j);
    }

    public find(i: number) {
        if (i == this.root[i]) {
            return i;
        }
        return this.root[i] = this.find(this.root[i]);
    }
    public union(x: number, y: number) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX != rootY) {
            if (this.height[rootX] > this.height[rootY]) {
                this.root[rootY] = rootX;
            } else if (this.height[rootX] < this.height[rootY]) {
                this.root[rootX] = rootY;
            } else {
                this.root[rootY] = rootX;
                this.height[rootX] += 1;
            }
            this.count--;
        }
    }
}
