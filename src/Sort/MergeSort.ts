
function mergeSort(nums: number[], tempArr: number[], left: number, right: number) {
    if (left >= right) {
        return;
    }
    let mid = (left + right) >> 1;

    mergeSort(nums, tempArr, left, mid);
    mergeSort(nums, tempArr, mid + 1, right);
    merge(nums, tempArr, left, mid, right);
}

function sort(nums: number[]) {
    mergeSort(nums, [], 0, nums.length - 1);
}


sort([1, 3, 2, 0, 9, -1]);

function merge(nums: number[], tempArr: number[], left: number, mid: number, right: number) {
    let l = left;
    let r = mid + 1;
    let pos = left;

    while (l <= mid && r <= right) {
        if (nums[l] < nums[r]) {
            tempArr[pos++] = nums[l++];
        } else {
            tempArr[pos++] = nums[r++];
        }
    }

    while (l <= mid) {
        tempArr[pos++] = nums[l++];
    }
    while (r <= right) {
        tempArr[pos++] = nums[r++];
    }
    while (left <= right) {
        nums[left] = tempArr[left];
        left++;
    }

}