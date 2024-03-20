/**
 * @param {string[]} operations
 * @return {number}
 */

let operations = ['X++', '++X', '--X', 'X---']

var finalValueAfterOperations = function(operations) {
    let count = 0
    for(let i = 0; i < operations.length; i++){
        if (operations[i] === "++X" | operations[i] === "X++"){
            count += 1
        } else {
            count -= 1
        }
    }
    return count
};

console.log(finalValueAfterOperations(operations))

      
// return operations.reduce((acc,value)=>{
//     if(value === '--X' || value === 'X--')
//         return acc = acc -1
//     else
//          return   acc = acc +1
// },0)