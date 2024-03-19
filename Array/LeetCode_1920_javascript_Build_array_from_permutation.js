/**
 * @param {number[]} nums
 * @return {number[]}
 */

// nums = [0, 2, 1, 5, 3, 4];
nums = [5, 0, 1, 2, 3, 4];

var buildArray = function(nums) {
    let newArray = []
    for(let i = 0; i < nums.length; i++){
        newArray.push(nums[nums[i]])
    }
    return newArray
};

// var buildArray = function (nums) {
//     return nums.map((x) => nums[x]);
// };

console.log(buildArray(nums));