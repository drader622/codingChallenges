// An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

// Constraints:

// -231 <= n <= 231 - 1

Solution solution = new Solution();
int num = 6;
Console.WriteLine(solution.IsUgly(num));

num = 1;
Console.WriteLine(solution.IsUgly(num));

num = 14;
Console.WriteLine(solution.IsUgly(num));

num = 8;
Console.WriteLine(solution.IsUgly(num));

num = -2147483648;
Console.WriteLine(solution.IsUgly(num));


public class Solution
{
    public bool IsUgly(int n)
    {
        if (n < 1) return false;
        while (n > 1)
        {
            if (n % 2 == 0) n = n / 2;
            else if (n % 3 == 0) n = n / 3;
            else if (n % 5 == 0) n = n / 5;
            else return false;
        }
        return true;
    }
}