// Reverse bits of a given 32 bits signed integer.



// Example 1:

// Input: n = 43261596

// Output: 964176192

// Explanation:

// Integer Binary
// 43261596    00000010100101000001111010011100
// 964176192   00111001011110000010100101000000

// Constraints:

// 0 <= n <= 231 - 2
// n is even.

Solution solution = new Solution();
int n = 43261596;
Console.WriteLine(solution.ReverseBits(n));

n = 2147483644;
Console.WriteLine(solution.ReverseBits(n));

public class Solution
{
    public int ReverseBits(int n)
    {
        string tempStr = String.Empty;
        string binaryStr = Convert.ToString(n, 2);

        if (binaryStr.Length < 32)
        {
            for (int i = 32 - binaryStr.Length; i > 0; i--)
            {
                tempStr += '0';
            }
        }

        char[] revArr = (tempStr + binaryStr).ToCharArray();

        Array.Reverse(revArr);
        string revStr = new string(revArr);

        return Convert.ToInt32(revStr, 2);
    }
}