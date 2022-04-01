
function insertingSort(arr: number[]) {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }
    for (let j = 1; j < len; ++j) {
        for (let i = j; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
            } else {
                break;
            }
        }
    }
}

insertingSort([3, 1, 2, 8, 4]);

function swap(nums: number[], i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
