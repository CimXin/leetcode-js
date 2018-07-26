//Q: K-diff Pairs in an Array https://leetcode-cn.com/problems/k-diff-pairs-in-an-array/description/

/**
 * 思路：冒泡排序
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    var lens = nums.length;
    var resultMap = {};
    var count = 0;
    for (var i = 0; i < lens; ++i) {
        for (var j = i; j < lens; ++j) {
            if (j == i) {
                continue;
            }
            var m = nums[i],n = nums[j];
            if (Math.abs(m-n) == k) {
                if (!resultMap[m + '-' + n] && !resultMap[n + '-' + m]) {
                    resultMap[m + '-' + n] = 1;
                    resultMap[n + '-' + m] = 1;
                    count ++;
                }
            }
        }
    }
    return count;
};

var result = findPairs([3,1,4,1,5],2);
console.log(result)