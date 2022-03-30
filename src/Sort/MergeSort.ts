
// function mergeSort(nums: number[], tempArr: number[], left: number, right: number) {
//     if (left >= right) {
//         return;
//     }
//     let mid = (left + right) >> 1;

//     mergeSort(nums, tempArr, left, mid);
//     mergeSort(nums, tempArr, mid + 1, right);
//     merge(nums, tempArr, left, mid, right);
// }

// function sort(nums: number[]) {
//     mergeSort(nums, [], 0, nums.length - 1);
// }


// let a = [1, 3, 2, 0, 9, -1];
// sort(a);
// console.error(a);

// function merge(nums: number[], tempArr: number[], left: number, mid: number, right: number) {
//     let l = left;
//     let r = mid + 1;
//     let pos = left;

//     while (l <= mid && r <= right) {
//         if (nums[l] < nums[r]) {
//             tempArr[pos++] = nums[l++];
//         } else {
//             tempArr[pos++] = nums[r++];
//         }
//     }

//     while (l <= mid) {
//         tempArr[pos++] = nums[l++];
//     }
//     while (r <= right) {
//         tempArr[pos++] = nums[r++];
//     }
//     while (left <= right) {
//         nums[left] = tempArr[left];
//         left++;
//     }

// }


function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    /**
        1,先统计出在未生气的状态下的所有顾客
        2，移动窗口，当生气时在所有值上去加上生气影响的顾客，求出其中的最大值
     */
    let noAngryTotal = 0;
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] == 0) {
            noAngryTotal += customers[i];
        }
    }

    let total = noAngryTotal;
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] == 1) {
            total += customers[i];
        }
    }

    let res = total;
    for (let i = minutes; i < customers.length; i++) {
        if (grumpy[i - minutes] == 1) {
            total -= customers[i - minutes];
        }
        if (grumpy[i] == 1) {
            total += customers[i];
        }
        res = Math.max(res, total);
    }
    return res;
};

maxSatisfied([3], [1], 1);