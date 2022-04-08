function quickSort(nums: number[], p: number, r: number) {
    if (p < r) {
        let pIndex = partition(nums, p, r);
        quickSort(nums, p, pIndex - 1);
        quickSort(nums, pIndex + 1, r);
    }
}

let nums = [3, 2, 15, 6, 2, 9];
quickSort(nums, 0, nums.length - 1);
console.log(nums);

function partition(nums: number[], p: number, r: number) {
    let x = nums[r];
    let i = p - 1;
    for (let j = p; j <= r - 1; j++) {
        if (nums[j] <= x) {
            i++;
            swap(nums, i, j);
        }
    }
    swap(nums, i + 1, r);

    return i + 1;
}

function swap(nums: number[], x: number, y: number) {
    if (x == y) return;
    let temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
}