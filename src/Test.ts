/**
 * 最小堆 最大堆
 */

class Heap<T> {
    public compare: Function;
    private data: T[] = [];
    constructor(compare: Function) {
        this.compare = compare;
    }

    public push(data: T) {
        this.data.push(data);
        this.heap_up(this.data.length - 1);
    }

    public pop(): T {
        let top = this.data[0];
        this.swap(0, this.data.length - 1);
        this.data.pop();
        this.heap_down(0);
        return top;
    }

    private heap_down(i: number) {
        let size = this.data.length;
        while (i < size) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let cur = i;

            if (left < size && this.compare(this
                .data[left], this.data[i])) {
                cur = left;
            }
            if (right < size && this.compare(this.data[right], this.data[i])) {
                cur = right;
            }
            if (cur == i) break;
            this.swap(cur, i);
            i = cur;
        }
    }

    private heap_up(i: number) {
        while (i < this.data.length && this.compare(this
            .data[i], this.data[this.getParentIndex(i)])) {
            this.swap(i, this.getParentIndex(i));
            i = this.getParentIndex(i);
        }
    }

    private getParentIndex(i: number) {
        return Math.floor((i - 1) / 2);
    }

    public swap(x: number, y: number) {
        let temp = this.data[x];
        this.data[x] = this.data[y];
        this.data[y] = temp;
    }

    public get datas() {
        return this.data;
    }
}

// let heap = new Heap<number>((a, b) => {
//     return a < b;
// });

// heap.push(2);
// heap.push(0);
// heap.push(10);
// heap.push(7);
// heap.push(9);
// let size = heap.datas.length;
// for (let i = 0; i < size; i++) {
//     let t = heap.pop();
//     console.log(t);
// }


function maxProfit(prices: number[]): number {
    if (prices.length == 0) return 0;
    let dp = Array(prices.length).fill(0);

    let minPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        if (prices[i] > prices[i - 1]) {
            dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
        }
    }
    return dp[prices.length - 1];
};

maxProfit([7,1,5,3,6,4]);
