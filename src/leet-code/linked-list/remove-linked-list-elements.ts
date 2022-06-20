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
    it('passes test cases', () => testCases(removeElements))
})
describe('removeElements2', function() {
    it('passes test cases', () => testCases(removeElements2))
})

function testCases(fn: (head: ListNode | null, val: number) => ListNode | null) {
    const zipFuncUnZip = (arr1: number[], target: number, fn: (head: ListNode | null, val: number) => ListNode | null): number[] => {
        const ll1 = LinkedList.fromArray(arr1);
        const result = fn(ll1, target)
        return LinkedList.toArray(result);
    }

    expect(zipFuncUnZip([1,2,6,3,4,5,6], 6, fn)).to.deep.equal([1,2,3,4,5]);
    expect(zipFuncUnZip([], 1, fn)).to.deep.equal([]);
    expect(zipFuncUnZip([7,7,7,7], 7, fn)).to.deep.equal([]);
}


