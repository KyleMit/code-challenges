// https://leetcode.com/problems/remove-linked-list-elements/
import { LinkedList, ListNode } from ".";

export function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null

    let node: ListNode | null = head;

    while (node) {
        if (node.next?.val === val) {
            // skip next if it's bad
            node.next = node.next.next
        } else {
            // move to next
            node = node.next
        }
    }

    if (head.val === val) {
        head = head.next
    }

    return head;
};

export function removeElements2(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null
    head.next = removeElements(head.next, val);
    return head.val == val ? head.next : head;
};

describe('removeElements', function() {
    it('passes test cases', function() {
        expect(zipRemoveUnZip([1,2,6,3,4,5,6], 6)).to.deep.equal([1,2,3,4,5]);
        expect(zipRemoveUnZip([], 1)).to.deep.equal([]);
        expect(zipRemoveUnZip([7,7,7,7], 7)).to.deep.equal([]);
    })
})


function zipRemoveUnZip(arr1: number[], target: number) {
    const ll1 = LinkedList.fromArray(arr1);
    const result = removeElements(ll1, target)
    return LinkedList.toArray(result);
}
