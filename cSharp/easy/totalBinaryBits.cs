Solution solution = new Solution();
int n = 11;
Console.WriteLine(solution.HammingWeight(n));

n = 128;
Console.WriteLine(solution.HammingWeight(n));


public class Solution
{
    public int HammingWeight(int n)
    {
        int totalBits = 0;
        string binaryStr = Convert.ToString(n, 2);

        foreach (char bit in binaryStr)
        {
            if (bit == '1') totalBits++;
        }

        return totalBits;
    }
}