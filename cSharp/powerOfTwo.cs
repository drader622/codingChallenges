// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Constraints:

// -231 <= n <= 231 - 1

Solution solution = new Solution();
int n = 1;
Console.WriteLine(solution.IsPowerOfTwo(n));

n = 16;
Console.WriteLine(solution.IsPowerOfTwo(n));

n = 3;
Console.WriteLine(solution.IsPowerOfTwo(n));

n = 6;
Console.WriteLine(solution.IsPowerOfTwo(n));

public class Solution
{
    public bool IsPowerOfTwo(int n)
    {
        if (n == 0) return false;
        if (n == 1) return true;
        if (n % 2 != 0) return false;
        else
        {
            n = n / 2;
            return IsPowerOfTwo(n);
        }
    }
}