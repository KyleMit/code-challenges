// https://leetcode.com/problems/linked-list-cycle/
import { LinkedList, ListNode } from ".";

export function hasCycle(head: ListNode | null): boolean {
    let node = head;

    const matches = new Set();
    while (node?.next != null) {
        if (matches.has(node)) {
            return true
        }
        matches.add(node);
        // advance linked list
        node = node.next;
    }
    return false
};

// Floyd's Cycle Finding Algorithm
export function hasCycle2(head: ListNode | null): boolean {
    if (head == null) { return false }

    let slow = head;
    let fast = head.next;

    while (slow != fast) {
        if (!fast?.next) { return false }

        slow = slow.next!;
        fast = fast.next.next;
    }

    return true;
};


describe('hasCycle', function() {
    it('passes test cases', () => testCases(hasCycle))
})
describe('hasCycle2', function() {
    it('passes test cases', () => testCases(hasCycle2))
})


function testCases(fn: (head: ListNode | null) => boolean) {
    expect(fn(createLinkedListCycle([3,2,0,-4], 1))).to.equal(true);
    expect(fn(createLinkedListCycle([1,2], 0))).to.equal(true);
    expect(fn(createLinkedListCycle([1], -1))).to.equal(false);
}

function createLinkedListCycle(arr: number[], pos: number): ListNode | null {
    const list = LinkedList.fromArray(arr)
    if (!list) return null;

    const head = list;
    let tail = head;

    let target: ListNode | null = null;
    let node: ListNode | null = list;
    let i = 0
    while (node){
        if (i === pos) {
            target = node
        }
        i++
        if (!node.next) {
            tail = node;
        }
        node = node.next;
    }
    // assign tail to target if we got one
    tail.next = target;
    return head
}

