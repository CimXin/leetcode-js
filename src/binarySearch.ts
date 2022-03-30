// // // // function reversePairs(nums: number[]): number {
// // // //     if (nums.length < 1) return 0;
// // // //     let temp = Array(nums.length).fill(0);
// // // //     return mergeSort(nums, 0, nums.length - 1, temp);
// // // // };

// // // // function mergeSort(nums: number[], left: number, right: number, temp: number[]) {
// // // //     if (left == right) return 0;

// // // //     let mid = (left + right) >> 1;

// // // //     let n1 = mergeSort(nums, left, mid, temp);
// // // //     let n2 = mergeSort(nums, mid + 1, right, temp);
// // // //     let ans = n1 + n2;

// // // //     let i = left;
// // // //     let j = mid + 1;

// // // //     while (i <= mid) {
// // // //         while (j <= right && nums[i] > 2 * nums[j]) {
// // // //             j++;
// // // //         }
// // // //         ans += (j - mid - 1);
// // // //         i++;
// // // //     }
// // // //     console.log(nums.slice(left, right + 1), left, right, ans);

// // // //     let p1 = left; let p2 = mid + 1;
// // // //     for (let k = left; k <= right; k++) {
// // // //         if (p1 > mid) {
// // // //             temp[k] = nums[p2];
// // // //             p2++;
// // // //         } else if (p2 > right) {
// // // //             temp[k] = nums[p1];
// // // //             p1++;
// // // //         } else {
// // // //             if (nums[p1] <= nums[p2]) {
// // // //                 temp[k] = nums[p1];
// // // //                 p1++;
// // // //             } else {
// // // //                 temp[k] = nums[p2];
// // // //                 p2++;
// // // //             }
// // // //         }
// // // //     }
// // // //     while (left <= right) {
// // // //         nums[left] = temp[left];
// // // //         left++;
// // // //     }
// // // //     return ans;
// // // // }


// // // // reversePairs([1, 3, 2, 3, 1]);



// // // let ANS = 0;
// // // function subarraysWithMoreZerosThanOnes(nums: number[]): number {
// // //     ANS = 0;
// // //     //利用前缀和 将0设为-1，如果当前前缀和大于0表示可以组成子数组
// // //     let len = nums.length;
// // //     if (len < 1) return ANS;
// // //     let preSums = [0];
// // //     let sum = 0;
// // //     for (let i of nums) {
// // //         sum += (i == 0 ? -1 : i);
// // //         preSums.push(sum);
// // //     }
// // //     console.error(preSums);
// // //     let tempArr = Array(len).fill(0);
// // //     return mergeSort(nums, 0, len - 1, tempArr);
// // //     // return ANS;
// // // };

// // // function mergeSort(nums: number[], left: number, right: number, tempArr: number[]) {
// // //     if (left == right) return 0;
// // //     let mid = (left + right) >> 1;
// // //     let n1 = mergeSort(nums, left, mid, tempArr);
// // //     let n2 = mergeSort(nums, mid + 1, right, tempArr);
// // //     let ans = n1 + n2;

// // //     let i = left; let j = mid + 1;
// // //     while (i <= mid) {
// // //         while (j <= right && nums[j] > nums[i]) {
// // //             j++;
// // //         }
// // //         ans += (j - mid - 1);
// // //         i++;
// // //     }
// // //     console.error(ans, left, right);

// // //     let p1 = left; let p2 = mid + 1;
// // //     for (let k = left; k <= right; k++) {
// // //         if (p1 > mid) {
// // //             tempArr[k] = nums[p2++];
// // //         } else if (p2 > right) {
// // //             tempArr[k] = nums[p1++];
// // //         } else {
// // //             if (nums[p1] < nums[p2]) {
// // //                 tempArr[k] = nums[p1++];
// // //             } else {
// // //                 tempArr[k] = nums[p2++];
// // //             }
// // //         }
// // //     }

// // //     while (left <= right) {
// // //         nums[left] = tempArr[left];
// // //         left++;
// // //     }
// // //     return ans;
// // // }

// // // let res = subarraysWithMoreZerosThanOnes([0, 1, 1, 0]);
// // // console.error(res);


// // function pivotIndex(nums: number[]): number {
// //     let preSums = [0];
// //     let sum = 0;
// //     for (let i of nums) {
// //         sum += i;
// //         preSums.push(sum);
// //     }

// //     for (let i = 1; i < preSums.length; i++) {
// //         let left = preSums[i-1] - preSums[0];
// //         let right = preSums[preSums.length - 1] - preSums[i];
// //         if (right == left) {
// //             return i - 1;
// //         }
// //     }
// //     return -1;
// // };

// // pivotIndex([1, 7, 3, 6, 5, 6]);



function findRelativeRanks(score: number[]): string[] {
    let tempArr = [];
    let k = 0;
    for (let i of score) {
        tempArr.push([i, k++])
    }
    let maxHeap = new MaxHeap(tempArr);
    let ret = new Array(score.length);
    let map = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    for (let i = 0; i < score.length; i++) {
        ret[maxHeap.pop()[1]] = map[i] ? map[i] : (i + 1) + "";
    }
    return ret;
};

class MaxHeap {
    constructor(public nums: number[]) {
        for (let i = nums.length >> 1; i >= 0; i--) {
            this.heapDown(i);
        }
    }

    public heapDown(i: number) {
        let size = this.nums.length;
        let arr = this.nums;

        while (i < size) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let max = i;

            if (left < size && arr[max][0] < arr[left][0]) {
                max = left;
            }
            if (right < size && arr[max][0] < arr[right][0]) {
                max = right;
            }
            if (max == i) {
                break;
            }
            this.swap(i, max);
            i = max;
        }
    }

    public pop() {
        let topNode = this.nums[0];
        this.swap(0, this.nums.length - 1);
        this.nums.pop();
        this.heapDown(0);
        return topNode;
    }

    public swap(i, j) {
        let temp = this.nums[i];
        this.nums[i] = this.nums[j];
        this.nums[j] = temp;
    }
}

findRelativeRanks([5, 6, 1, 3, 2]);
