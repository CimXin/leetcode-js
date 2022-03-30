function removeDuplicates(nums: number[]): number {
    let left = 0;
    let right = 0;
    let len = nums.length;
    let index = 0;
    let res = 0;
    while (right < len) {
        while (right < len && nums[left] == nums[right]) {
            if (right - left < 2) {
                nums[index++] = nums[right];
            }
            right++;
        }

        if (right - left >= 2) {
            res += 2;
        } else {
            res += (right - left);
        }
        left = right;
    }
    return res;
};

removeDuplicates(
    [1, 1, 1, 2, 2, 3]);