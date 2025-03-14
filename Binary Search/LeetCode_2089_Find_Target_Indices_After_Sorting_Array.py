class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        left = 0
        right = len(nums) - 1
        nums.sort()
        result = []
        while(left <= right):
            middle = (left + right) // 2
            if nums[middle] == target:
                result.append(middle)
                i = middle + 1
                j = middle - 1
                while(i <= right and nums[i] == target):
                    result.append(i)
                    i += 1
                while(j >= left and nums[j] == target):
                    result.append(j)
                    j -= 1
                break
            elif left == right:
                break
            elif nums[middle] < target:
                left = middle + 1
            else:
                right = middle - 1
        result.sort()
        return result