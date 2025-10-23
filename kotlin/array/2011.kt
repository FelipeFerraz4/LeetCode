class Solution {
    fun finalValueAfterOperations(operations: Array<String>): Int {
        var x = 0;
        for(operation in operations){
            if(operation[1] == '+'){
                x++;
            } else {
                x--;
            }
        }
        return x;
    }
}
