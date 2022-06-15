// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

import { LinkedList, ListNode } from ".";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    let node = head;
    while (node) {
        if (node.val === node.next?.val) {
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return head;
};


describe('deleteDuplicates', function() {
    it('passes test cases', () => {
        expect(zipFuncUnZip([1,1,2], deleteDuplicates)).to.deep.equal([1,2]);
        expect(zipFuncUnZip([1,1,2,3,3], deleteDuplicates)).to.deep.equal([1,2,3]);

    })
})


function zipFuncUnZip(arr1: number[], fn: (head: ListNode | null) => ListNode | null): number[] {
    const ll1 = LinkedList.fromArray(arr1);
    const result = fn(ll1)
    return LinkedList.toArray(result);
}
