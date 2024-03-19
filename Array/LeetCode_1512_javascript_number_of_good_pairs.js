/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [1, 2, 3, 1, 1, 3];
// let nums = [1, 1, 1, 1]
// let nums = [1, 2, 3]

var numIdenticalPairs = function(nums) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if (nums[i] == nums[j] & i < j) {
                count += 1;
            }
        }
    }
    return count
};

console.log(numIdenticalPairs(nums));

// // time O(N) space O(N)
// var numIdenticalPairs = function(nums) {
//     const map = {}
//     let count = 0
    
//     for (const number of nums) {
//         if (map[number]) {
//             count += map[number];
//             map[number] += 1;
//         } else {
//             map[number] = 1;
//         }
//     }
//     return count
// };