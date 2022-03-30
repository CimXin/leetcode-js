function findKthLargest(nums: number[], k: number): number {

    // quickSelect(nums, 1, nums.length - 1, 0);

    let low = 0;
    let high = nums.length - 1;
    let kTh = nums.length - k;

    while (true) {

        let index = partiton(nums, low, high);
        if (kTh == index) {
            return nums[kTh];
        } else if (index > kTh) {
            high = index - 1;
        } else {
            low = index + 1;
        }
    }
};

function partiton(nums: number[], low: number, high: number) {
    if (low == high) return low;

    let i = low, j = high + 1;
    let pivot = nums[low];

    while (true) {
        while (nums[++i] < pivot) {
            if (i == high) break;
        }
        while (nums[--j] > pivot) {
            if (j == low) break;
        }
        if (i >= j) {
            break;
        }
        swap(nums, i, j);
    }
    swap(nums, j, low);
    return j;
}


findKthLargest([3, 5, 4, 2, 6, 1], 2);


function swap(nums: number[], i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}