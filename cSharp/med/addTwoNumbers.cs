// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

using System.Diagnostics.CodeAnalysis;

Solution solution = new Solution();

ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4)));


public class Solution
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2, int carry = 0)
    {
        if (l1 == null && l2 == null && carry == 0) return null;

        int total = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carry;
        carry = total / 10;
        return new ListNode(total % 10, AddTwoNumbers(l1?.next, l2?.next, carry));
    }
}

public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}