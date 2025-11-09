// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A-> 1
// B-> 2
// C-> 3...
// Z-> 26
// AA-> 27
// AB-> 28...

// Constraints:

// 1 <= columnNumber <= 231 - 1


Solution solution = new Solution();
int columnNumber = 702;
Console.WriteLine(solution.ConvertToTitle(columnNumber));

columnNumber = 52;
Console.WriteLine(solution.ConvertToTitle(columnNumber));

columnNumber = 701;
Console.WriteLine(solution.ConvertToTitle(columnNumber));

columnNumber = 2147483647;
Console.WriteLine(solution.ConvertToTitle(columnNumber));

columnNumber = 28;
Console.WriteLine(solution.ConvertToTitle(columnNumber));

columnNumber = 1;
Console.WriteLine(solution.ConvertToTitle(columnNumber));

public class Solution
{
    public string ConvertToTitle(int columnNumber)
    {
        Dictionary<int, char> map = new Dictionary<int, char>();
        for (int i = 65; i <= 90; i++)
        {
            map.Add(i - 65, (char)i);
        }

        string result = string.Empty;

        while (columnNumber > 0)
        {
            columnNumber--;
            result = map[columnNumber % 26] + result;
            columnNumber /= 26;
        }

        return result;
    }
}