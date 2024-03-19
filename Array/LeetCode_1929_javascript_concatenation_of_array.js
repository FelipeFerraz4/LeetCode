// nums = [1, 2, 1]

var getConcatenation = function(nums) {
    let arrayNumber = [];
    for(let i = 0; i < nums.length; i++) {
        arrayNumber.push(nums[i]);
    }
    for(let i = 0; i < nums.length; i++) {
        arrayNumber.push(nums[i]);
    }
    return arrayNumber;
};

// var getConcatenation = function(nums) {
//     return [...nums, ...nums];
// };

// var getConcatenation = function(nums) {
//     return nums.concat(nums);
// };

// console.log(getConcatenation(nums))
