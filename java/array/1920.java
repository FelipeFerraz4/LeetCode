import java.util.Arrays;

class Solution {
    public int[] buildArray(int[] nums) {
        int size = nums.length;
        int[] ans = new int[size];
        for(int i = 0; i < size; i++){
            ans[i] = nums[nums[i]];
        }
        return ans;
    }
}

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {0,2,1,5,3,4};
        int[] result = solution.buildArray(nums);
        System.out.println(Arrays.toString(result));
    }
}

//Melhor solução
//class Solution {
//
//    //using recursion
//    public int[] buildArray(int[] nums) {
//        aPermutation(nums,0);
//
//        return nums;
//    }
//
//    void aPermutation(int[] nums,int start){
//        if(start<nums.length){
//            int temp=nums[start];
//            int result=nums[temp];
//            aPermutation(nums,start+1);
//            nums[start]=result;
//        }
//
//    }
//}
