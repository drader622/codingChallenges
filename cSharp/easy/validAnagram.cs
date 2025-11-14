// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.



// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

Solution solution = new Solution();
string s = "anagram", t = "nagaram";
Console.WriteLine(solution.IsAnagram(s, t));

s = "rat";
t = "car";
Console.WriteLine(solution.IsAnagram(s, t));

public class Solution
{
    public bool IsAnagram(string s, string t)
    {
        char[] arr1 = s.ToCharArray();
        Array.Sort(arr1);
        string str1 = new string(arr1);

        char[] arr2 = t.ToCharArray();
        Array.Sort(arr2);
        string str2 = new string(arr2);

        return str1 == str2;
    }
}