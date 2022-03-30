

//1.归并排序 https://www.bilibili.com/video/av626091825?from=search&seid=8673511506506175169&spm_id_from=333.337.0.0

function merge_sort(arr: number[]) {
    let tempArr = [];
    msort(arr, tempArr, 0, arr.length - 1);
}

function msort(arr: number[], tempArr: number[], left: number, right: number) {
    if (left < right) {
        //0，找到中间点
        let mid = (left + right) >> 1;
        //1，递归拆分左半边
        msort(arr, tempArr, left, mid);
        //2，递归拆分右半边
        msort(arr, tempArr, mid + 1, right);
        //3，合并已经排序好的部分
        merge(arr, tempArr, left, mid, right);
    }
}

function merge(arr: number[], tempArr: number[], left: number, mid: number, right: number) {
    let l_pos = left;
    let r_pos = mid + 1;
    let pos = left;

    //合并
    while (l_pos <= mid && r_pos <= right) {
        if (arr[l_pos] < arr[r_pos]) {
            tempArr[pos++] = arr[l_pos++];
        } else {
            tempArr[pos++] = arr[r_pos++];
        }
    }

    //合并剩余的左半边元素
    while (l_pos <= mid) {
        tempArr[pos++] = arr[l_pos++];
    }
    //合并剩余的右半边元素
    while (r_pos <= right) {
        tempArr[pos++] = arr[r_pos++];
    }

    //把临时数组中合并后的元素复制会原数组
    while (left <= right) {
        arr[left] = tempArr[left];
        left++
    }
}

let arr = [2, 10, 3, 4, 1, 8, 7];
merge_sort(arr);
console.log(arr);