/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i =0; i < nums.length;++i){
        var data = nums[i];
        if(map[data] !== undefined){
            return [map[data],i];
        }else{
            map[target - data] = i;
        }
    }
};