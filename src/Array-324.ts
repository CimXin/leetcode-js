/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {

    let len = nums.length;
    let mid = getMid(nums);

    let i = 0, j = len - 1;
    let index = 0;
    while (index < j) {
        if (nums[index] == mid) {
            index++;
        } else if (nums[index] > mid) {
            swap(nums, index, j--);
        } else {
            swap(nums, index++, i++);
        }
    }


    let half = (len + 1) >> 1;
    let leftHalf = nums.slice(0, half);
    let rightHalf = nums.slice(half, len);
    index = 0;
    while (leftHalf.length > 0 && rightHalf.length > 0) {
        let first = leftHalf.pop();
        let second = rightHalf.pop();
        nums[index++] = first;
        nums[index++] = second;
    }
    if (leftHalf.length > 0) {
        nums[index] = leftHalf.pop();
    }

    console.error(mid);
};

wiggleSort([5, 3, 1, 2, 6, 7, 8, 5, 5]);

function getMid(nums: number[]) {
    let len = nums.length;

    let targetIndex = len >> 1;
    let low = 0, high = len - 1;
    while (true) {
        let onePartition = partiton(nums, low, high);
        if (onePartition == targetIndex) {
            return nums[onePartition];
        } else if (onePartition > targetIndex) {
            high = onePartition - 1;
        } else {
            low = onePartition + 1;
        }
    }
}

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

function swap(nums: number[], i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}