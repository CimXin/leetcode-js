function removeDuplicates(nums: number[]): number {

    let fast = 0;
    let slow = 0;

    while (fast < nums.length) {

        if (nums[fast] != nums[slow]) {
            nums[slow + 1] = nums[fast];
            slow += 1;
        }
        fast += 1;
    }
    return slow + 1;
};

removeDuplicates([0, 1, 1, 2, 2, 3, 4, 4]);