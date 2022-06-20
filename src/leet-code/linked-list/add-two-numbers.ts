// https://leetcode.com/problems/add-two-numbers/

import { LinkedList, ListNode } from ".";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const sentinel = new ListNode()
    let node = sentinel;
    let carry: number = 0;
    while (l1 || l2 || carry) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        const ones = sum % 10
        carry = Math.floor(sum / 10)

        node.next = new ListNode(ones)

        node = node.next;
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }
    return sentinel.next;
};

describe('addTwoNumbers', function() {
    it('passes test cases', () => {
        const zipFuncUnZip = (
                arr1: number[],
                arr2: number[],
                fn: (l1: ListNode | null, l2: ListNode | null) => ListNode | null
            ): number[] => {
            const result = fn(LinkedList.fromArray(arr1), LinkedList.fromArray(arr2))
            return LinkedList.toArray(result);
        }

        expect(zipFuncUnZip([2,4,3], [5,6,4], addTwoNumbers)).to.deep.equal([7,0,8]);
        expect(zipFuncUnZip([0], [0], addTwoNumbers)).to.deep.equal([0]);
    })
})

