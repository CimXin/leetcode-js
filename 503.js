
//Q: https://leetcode-cn.com/problems/next-greater-element-ii/description/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var lens = nums.length;
     var resultArr = new Array(lens).fill(-1);
     for (var i = 0; i < lens; ++i) {
         var curNum = nums[i];
         var maxNum = curNum;
         for (var j = i; j < i + lens; j++) {
             if (nums[j % lens] > maxNum) {
                 resultArr[i] = nums[j % lens];
                 break;
             }
         }
     }
     return resultArr;
 };