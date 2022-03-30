
function quickSort(nums: number[]) {
    qSort(nums, 0, nums.length - 1);
}

function qSort(nums: number[], left: number, right: number) {
    if (left >= right) {
        return;
    }
    let pivot = nums[left];
    let i = left;
    let j = right;

    while (i < j) {
        while (i < j && nums[i] < pivot) {
            i++;
        }
        while (i < j && nums[j] > pivot) {
            j--;
        }

        if (nums[i] == nums[j] && i < j) {
            i++;
        } else {
            swap(nums, i, j);
        }
    }

    if (i - 1 > left) {
        nums = qSort(nums, left, i - 1);
    }
    if (j + 1 < right) {
        nums = qSort(nums, j + 1, right);

    }
    return nums;
}

function swap(nums: number[], i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}



let a = [1, 3, 2, 0, 9, -1];
quickSort(a);
console.error(a);