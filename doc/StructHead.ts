
/**
 * 大顶堆或者小顶堆的实现
 * 参考：https://blog.csdn.net/hhdong123/article/details/119572473
 */

type HeadCompare = (x, y) => boolean;

class StructHead<T>{
    private array: Array<T> = null;
    private size: number = 0;
    private compare: HeadCompare = null;

    public constructor(compare: HeadCompare) {
        this.array = new Array<T>();
        this.size = 0;
        this.compare = compare;
    }

    public push(element: T) {

    }

    public pop() {

    }

    public clear() {
        this.array = new Array<T>();
        this.size = 0;
    }

    /** 上浮？ */
    public AjustUpgrade() {

    }

    /** 下沉？ */
    public AdjustDown() {

    }

    public Swap(node1, node2) {

    }

}