class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort()
        result = 0
        left = 0
        right = len(nums) - 1
        while(left < right):
            if nums[left] + nums[right] < target:
                result += right - left
                left += 1
            else:
                right -= 1
        return result
    
    
# class Solution:
#     def countPairs(self, nums: List[int], target: int) -> int:
#         size = len(nums)
#         result = 0
#         for i in range(size):
#             for j in range(size):
#                 if (0 <= i < j < size) and (nums[i] + nums[j] < target):
#                     result += 1
#         return result
