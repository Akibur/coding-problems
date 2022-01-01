public class Solution {
    public int MaxSubArray(int[] nums) {
        int prevSum = 0;
    int max = int.MinValue;

    for (int i = 0; i < nums.Length; i++) {
        prevSum = Math.Max(prevSum + nums[i], nums[i]);
        max = Math.Max(max, prevSum);
    }
    return max;
    }
}