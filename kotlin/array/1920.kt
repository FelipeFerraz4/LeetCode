class Solution {
    fun buildArray(nums: IntArray): IntArray {
        val size = nums.size
        val ans = IntArray(size)
        for (i in nums.indices) {
            ans[i] = nums[nums[i]]
        }
        return ans
    }
}
