// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// - 231 <= matrix[i][j] <= 231 - 1

using System.Text;
using System.Text.RegularExpressions;

Solution solution = new Solution();

int[][] matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
solution.SetZeroes(matrix);

matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
solution.SetZeroes(matrix);

public class Solution
{
    public void SetZeroes(int[][] matrix)
    {
        List<int> rowList = [];
        List<int> colList = [];
        for (int row = 0; row < matrix.Length; row++)
        {
            for (int col = 0; col < matrix[0].Length; col++)
            {
                if (matrix[row][col] == 0)
                {
                    rowList.Add(row);
                    colList.Add(col);
                }
            }
        }

        for (int row = 0; row < matrix.Length; row++)
        {
            for (int col = 0; col < matrix[0].Length; col++)
            {
                if (rowList.Contains(row) || colList.Contains(col))
                {
                    matrix[row][col] = 0;
                }
            }
        }

        // if (!zeroFound) Console.WriteLine("No 0 elemnents found");

        // for (int i = 0; i < matrix.Length; i++)
        // {
        //     for (int j = 0; j < matrix[0].Length; j++)
        //     {
        //         Console.Write(matrix[i][j]);
        //     }
        //     Console.WriteLine("");
        // }
    }
}
