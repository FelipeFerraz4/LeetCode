class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        number_lines = len(grid)
        number_column = len(grid[0])
        result = 0
        for i in range(number_lines):
            for j in range(number_column):
                if grid[i][j] < 0:
                    result += number_column - j
                    break
        return result
        