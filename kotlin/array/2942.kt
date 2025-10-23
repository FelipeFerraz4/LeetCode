class Solution {
    fun findWordsContaining(words: Array<String>, x: Char): List<Int> {
        val ans = mutableListOf<Int>();

        words.forEachIndexed {index, word -> 
            for(i in 0 until word.length) {
                if(word[i] == x){
                    ans.add(index);
                    break
                }
            }
        }

        return ans;
    }
}
