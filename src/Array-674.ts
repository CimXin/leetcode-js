function findLengthOfLCIS(nums: number[]): number {

    let left = 0;
    let right = 0;
    let res = 0;

    while (right < nums.length) {
        if (right > 0 && nums[right - 1] >= nums[right]) {
            left = right;
        }
        right++;

        res = Math.max(res, right - left);
    }
    return res;
};

findLengthOfLCIS([1, 3, 5, 4, 7, 8, 9]);