
/** 用堆实现的优先队列 */
export class Heap<T> {
    private datas: T[] = [];
    public constructor(public compare: Function) {

    }

    public get size() {
        return this.datas.length;
    }

    public get data() {
        return this.datas;
    }

    public push(data: T) {
        this.datas.push(data);
        this.heapUp(this.datas.length - 1);
    }

    public pop(): T {
        let topNode = this.datas[0];
        this.swap(0, this.datas.length - 1);
        this.datas.pop();
        this.heapDown(0);
        return topNode;
    }

    private heapUp(index: number) {
        while (index < this.datas.length && this.compare(this.datas[index], this.datas[this.getParentIndex(index)])) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    private heapDown(index: number) {
        let size = this.datas.length;
        while (index < size) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let curIndex = index;

            if (left < size && this.compare(this.datas[left], this.datas[curIndex])) {
                curIndex = left;
            }
            if (right < size && this.compare(this.datas[right], this.datas[curIndex])) {
                curIndex = right;
            }
            if (curIndex == index) break;
            this.swap(curIndex, index);
            index = curIndex;
        }
    }

    private getParentIndex(index: number) {
        return (index - 1) / 2 >> 0;
    }
    public swap(x: number, y: number) {
        let temp = this.datas[x];
        this.datas[x] = this.datas[y];
        this.datas[y] = temp;
    }
}
