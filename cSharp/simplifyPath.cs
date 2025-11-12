// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

// The rules of a Unix-style file system are as follows:

// A single period '.' represents the current directory.
// A double period '..' represents the previous/parent directory.
// Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
// The simplified canonical path should follow these rules:

// The path must start with a single slash '/'.
// Directories within the path must be separated by exactly one slash '/'.
// The path must not end with a slash '/', unless it is the root directory.
// The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
// Return the simplified canonical path.

// Constraints:

// 1 <= path.length <= 3000
// path consists of English letters, digits, period '.', slash '/' or '_'.
// path is a valid absolute Unix path.

Solution solution = new Solution();
string path = "///";
Console.WriteLine(solution.SimplifyPath(path));

path = "/a//b////c/d//././/..";
Console.WriteLine(solution.SimplifyPath(path));

path = "/a/../../b/../c//.//";
Console.WriteLine(solution.SimplifyPath(path));

path = "/a/./b/../../c/";
Console.WriteLine(solution.SimplifyPath(path));

path = "/home/";
Console.WriteLine(solution.SimplifyPath(path));

path = "/home//foo/";
Console.WriteLine(solution.SimplifyPath(path));

path = "/home/user/Documents/../Pictures";
Console.WriteLine(solution.SimplifyPath(path));

path = "/../";
Console.WriteLine(solution.SimplifyPath(path));


path = "/.../a/../b/c/../d/./";
Console.WriteLine(solution.SimplifyPath(path));


public class Solution
{
    public string SimplifyPath(string path)
    {
        string[] pathArr = path.Split('/');
        List<string> pathList = pathArr.ToList();

        pathList.RemoveAll(s => string.IsNullOrEmpty(s) || s == ".");
        if (pathList.Count == 0) return "/";
        for (int i = 0; i < pathList.Count - 1; i++)
        {
            if (pathList[i] == "..")
            {
                pathList.RemoveAt(i);
                if (i > 0) pathList.RemoveAt(i - 1);
                i = i <= 1 ? -1 : i -= 2;
            }
        }

        if (pathList.Count == 1 && pathList[0] == "..") return "/";
        if (pathList[pathList.Count - 1] == "..")
        {
            pathList.RemoveAt(pathList.Count - 1);
            pathList.RemoveAt(pathList.Count - 1);
        }

        return '/' + String.Join('/', pathList);
    }
}
