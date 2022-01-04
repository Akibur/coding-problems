public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        int counter = 0;
        
        for(int i =m; i<nums1.Length; i++){
            nums1[i] = nums2[counter];
            counter++;
        }
        
        Array.Sort(nums1);
        
        
    }
    
}