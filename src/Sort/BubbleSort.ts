
function BubbleSort(nums: number[]) {

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                swap(nums, i, j);
            }
        }
    }
}

function swap(nums: number[], i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let a = [1, 3, 2, 0, 9, -1];
BubbleSort(a);
console.error(a);