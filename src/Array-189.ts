/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {


    //解法一 数组的拼接
    let arr1 = nums.splice(0, nums.length - k);
    nums = nums.concat(nums, arr1);
    console.error(nums);


};

rotate([1, 2, 3, 4, 5, 6, 7], 3);