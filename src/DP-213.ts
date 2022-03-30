function rob(nums: number[]): number {

    /**
        三种情况 
        1，抢头不抢尾
        2，不抢头抢尾
        3，不抢头不抢尾
     */

    let nums1 = nums.slice(0, nums.length - 1);
    let nums2 = nums.slice(1, nums.length);
    let nums3 = nums.slice(1, nums.length - 1);

    return Math.max(dp(nums1), Math.max(dp(nums2), dp(nums3)));
};

function dp(nums: number[]) {
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
}