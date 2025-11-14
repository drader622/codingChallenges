// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// Constraints:

// 1 <= words.length <= 300
// 1 <= words[i].length <= 20
// words[i] consists of only English letters and symbols.
// 1 <= maxWidth <= 100
// words[i].length <= maxWidth

using System.Text;

Solution solution = new Solution();
string[] words = ["This", "is", "an", "example", "of", "text", "justification."];
int maxWidth = 16;
Console.WriteLine(solution.FullJustify(words, maxWidth));

words = ["What", "must", "be", "acknowledgment", "shall", "be"];
maxWidth = 16;
Console.WriteLine(solution.FullJustify(words, maxWidth));

words = ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"];
maxWidth = 20;
Console.WriteLine(solution.FullJustify(words, maxWidth));


public class Solution
{
    public IList<string> FullJustify(string[] words, int maxWidth)
    {
        List<string> result = new List<string>();
        List<string> currentLine = new List<string>();
        int currentLength = 0;

        foreach (string word in words)
        {
            if (currentLength + currentLine.Count + word.Length > maxWidth)
            {
                int numWords = currentLine.Count;
                int numSpaces = maxWidth - currentLength;
                string justifiedLine = "";

                if (numWords == 1)
                    justifiedLine = currentLine[0] + new string(' ', numSpaces);
                else
                {
                    int spacesBetweenWords = numSpaces / (numWords - 1);
                    int extraSpaces = numSpaces % (numWords - 1);

                    StringBuilder sb = new StringBuilder();

                    for (int i = 0; i < numWords - 1; i++)
                    {
                        sb.Append(currentLine[i]);
                        sb.Append(new string(' ', spacesBetweenWords));

                        if (i < extraSpaces)
                        {
                            sb.Append(' ');
                        }
                    }

                    sb.Append(currentLine[numWords - 1]);
                    justifiedLine = sb.ToString();
                }

                result.Add(justifiedLine);
                currentLine.Clear();
                currentLength = 0;
            }

            currentLine.Add(word);
            currentLength += word.Length;
        }

        string lastLine = string.Join(" ", currentLine);
        lastLine += new string(' ', maxWidth - lastLine.Length);
        result.Add(lastLine);

        return result;
    }
}
