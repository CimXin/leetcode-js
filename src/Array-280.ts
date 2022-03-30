function minOperations(nums: number[], x: number): number {

    /**
        跟滑动窗口有什么关系？？
        没关系
        
        使用前缀和和后缀和
     */

    let preSum = Array(nums.length + 1).fill(0);
    let sufSum = new Map<number, number>();
    sufSum.set(0, 0);

    let sufSumTotal = 0;
    for (let i = 0; i < nums.length; i++) {
        preSum[i + 1] = preSum[i] + nums[i];
        sufSumTotal = sufSumTotal + nums[nums.length - 1 - i];
        sufSum.set(sufSumTotal, i + 1);
    }

    if (preSum[nums.length - 1] < x) {
        return -1;
    }

    let result = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < preSum.length; i++) {

        let target = x - preSum[i];
        if (target < 0) {
            break;
        }
        if (sufSum.has(target)) {
            result = Math.min(result, i + sufSum.get(target));
        }
    }

    return result == Number.MAX_SAFE_INTEGER ? -1 : result;
};

minOperations([8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309]
    , 134365)
