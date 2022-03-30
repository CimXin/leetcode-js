function rob(nums: number[]): number {

    if (nums.length <= 1) {
        return nums.length == 0 ? 0 : nums[0];
    }

    let dp = new Array(nums.length).fill(0);

    let res = Math.max(nums[0], nums[1]);
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            dp[i] = nums[i];
            continue;
        }
        if (i == 1) {
            dp[i] = Math.max(nums[i - 1], nums[i]);
            continue;
        }

        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        res = Math.max(res, dp[i]);
    }

    return res;

};

rob([1, 1]);