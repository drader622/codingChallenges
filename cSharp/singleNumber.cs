// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Constraints:

// 1 <= nums.length <= 3 * 104
// - 3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

Solution solution = new Solution();

int[] nums = [1, 3, 1, -1, 3];
Console.WriteLine(solution.SingleNumber(nums));

nums = [2, 2, 1];
Console.WriteLine(Environment.NewLine + solution.SingleNumber(nums));

nums = [4, 1, 2, 1, 2];
Console.WriteLine(Environment.NewLine + solution.SingleNumber(nums));

nums = [1];
Console.WriteLine(Environment.NewLine + solution.SingleNumber(nums));

public class Solution
{
    public int SingleNumber(int[] nums)
    {
        int index = -1;
        if (nums.Length == 1) return nums[0];

        Array.Sort(nums);

        for (int i = 0; i < nums.Length - 1; i += 2)
        {
            if (nums[i] != nums[i + 1]) return nums[i];
        }

        if (index == -1) return nums[nums.Length - 1];

        return nums[index];
    }
}




