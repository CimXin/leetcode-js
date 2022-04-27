function coinChange(coins: number[], amount: number): number {

    let dp = Array(coins.length + 1).fill(Number.MAX_SAFE_INTEGER).map(() => Array(amount + 1).fill(Number.MAX_SAFE_INTEGER));
    for (let i = 0; i < coins.length; i++) {
        dp[i][0] = 0;
    }
    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            for (let k = 0; k * coins[i - 1] <= j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - k * coins[i - 1]] + k);
            }
        }
    }
    let ans = dp[coins.length][amount]
    return ans == Number.MAX_SAFE_INTEGER ? -1 : ans;
};

coinChange([1, 2, 5], 11);