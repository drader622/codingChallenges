// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

Solution solution = new Solution();

string s = "A man, a plan, a canal: Panama";
Console.Write(solution.IsPalindrome(s));

s = "0P";
Console.Write(Environment.NewLine + solution.IsPalindrome(s));

s = "race a car";
Console.Write(Environment.NewLine + solution.IsPalindrome(s));

s = " ";
Console.Write(Environment.NewLine + solution.IsPalindrome(s));

public class Solution
{
    public bool IsPalindrome(string s)
    {
        if (String.IsNullOrEmpty(s)) return true;

        string newStr = "";
        foreach (char letter in s)
        {
            if (Char.IsLetterOrDigit(letter))
            {
                newStr += Char.ToLower(letter);
            }
        }
        char[] charArr = newStr.ToCharArray();
        Array.Reverse(charArr);
        string revStr = new string(charArr);

        return newStr == revStr;
    }
}

