// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Constraints:

// 0 <= num <= 231 - 1

Solution solution = new Solution();
int num = 38;
Console.WriteLine(solution.AddDigits(num));

num = 0;
Console.WriteLine(solution.AddDigits(num));


public class Solution
{
    public int AddDigits(int num)
    {
        if (num < 10) return num;

        int total = 0;

        string numStr = num.ToString();

        foreach (var digit in numStr)
        {
            total += int.Parse(digit.ToString());
        }

        return AddDigits(total);
    }
}