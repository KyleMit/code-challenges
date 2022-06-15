// https://leetcode.com/problems/merge-two-sorted-lists/

import { LinkedList, ListNode } from ".";

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null) return list2
    if (list2 == null) return list1

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2;
    }

};

export function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const sentinel = new ListNode();

    let node = sentinel;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            node.next = list1;
            node = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            node = list2;
            list2 = list2.next;
        }
    }

    if (list1) {
        node.next = list1
    }
    if (list2) {
        node.next = list2
    }

    return sentinel.next
};



describe('mergeTwoLists', function() {
    it('passes test cases', () => testCases(mergeTwoLists))
})
describe('mergeTwoLists2', function() {
    it('passes test cases', () => testCases(mergeTwoLists2))
})

function testCases(fn: (list1: ListNode | null, list2: ListNode | null) => ListNode | null) {
    expect(zipMergeUnZip([1,2,4], [1,3,4])).to.deep.equal([1,1,2,3,4,4]);
        expect(zipMergeUnZip([], [])).to.deep.equal([]);
        expect(zipMergeUnZip([], [0])).to.deep.equal([0]);
}


function zipMergeUnZip(arr1: number[], arr2: number[]) {
    const ll1 = LinkedList.fromArray(arr1);
    const ll2 = LinkedList.fromArray(arr2);
    const result = mergeTwoLists(ll1, ll2)
    return LinkedList.toArray(result);
}
