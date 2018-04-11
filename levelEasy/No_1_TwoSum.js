/**
 * LeetCodeTrain.git
 * No_1_TwoSum
 * Created by June_z on 2018/4/11.
 * Create time 23:52
 */

/**
 * 用for循环嵌套查找结果
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_for = function(nums, target) {
    for(var i = 0; i < nums.length - 1; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};
