// https://leetcode.com/problems/reverse-linked-list/

import { LinkedList, ListNode } from ".";

export function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null

    let nodes = []
    let node: ListNode | null = head
    while (node) {
        nodes.push(node)
        node = node.next
    }

    const tail = nodes.pop() ?? null
    node = tail;
    let next: ListNode | null;

    while ((next = nodes.pop() ?? null)) {
        node!.next = next
        node = next
    }

    head.next = null;

    return tail

};

export function reverseList2(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next
    }
    return prev;
};

describe('reverseList', function() {
    it('passes test cases', () => testCases(reverseList))
})
describe('reverseList2', function() {
    it('passes test cases', () => testCases(reverseList2))
})

function testCases(fn: (head: ListNode | null) => ListNode | null) {
    expect(zipFuncUnZip([1,2,3,4,5], fn)).to.deep.equal([5,4,3,2,1]);
    expect(zipFuncUnZip([1,2], fn)).to.deep.equal([2,1]);
    expect(zipFuncUnZip([], fn)).to.deep.equal([]);
}



function zipFuncUnZip(arr1: number[], fn: (head: ListNode | null) => ListNode | null): number[] {
    const ll1 = LinkedList.fromArray(arr1);
    const result = fn(ll1)
    return LinkedList.toArray(result);
}
