// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// - 109 <= nums[i] <= 109
// The input is generated such that a majority element will exist in the array.

Solution solution = new Solution();
int[] nums = [3, 2, 3];
Console.WriteLine(solution.MajorityElement(nums));

nums = [2, 2, 1, 1, 1, 2, 2];
Console.WriteLine(solution.MajorityElement(nums));

public class Solution
{
    public int MajorityElement(int[] nums)
    {
        Array.Sort(nums);
        int prevNum = -1;
        int currNum = -1;
        int amount = 0;
        double max = 0.0;
        int majNum = 0;

        foreach (int num in nums)
        {
            if (num != currNum)
            {
                double instances = (double)(amount / 2.0);
                if (instances > max)
                {
                    max = instances;
                    majNum = prevNum;
                }
                currNum = num;
                amount = 1;
            }
            else
            {
                amount++;
            }
            prevNum = num;
        }

        if ((amount / 2.0) > max) return currNum;

        return majNum;
    }
}