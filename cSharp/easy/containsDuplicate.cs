// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Constraints:

// 1 <= nums.length <= 105
// - 109 <= nums[i] <= 109

Solution solution = new Solution();
int[] nums = [1, 2, 3, 1];
Console.WriteLine(solution.ContainsDuplicate(nums));

nums = [1, 2, 3, 4];
Console.WriteLine(solution.ContainsDuplicate(nums));

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
Console.WriteLine(solution.ContainsDuplicate(nums));

public class Solution
{
    public bool ContainsDuplicate(int[] nums)
    {
        return nums.Distinct().Count() != nums.Count();
    }
}