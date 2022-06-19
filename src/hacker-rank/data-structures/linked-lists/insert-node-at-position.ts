// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/

import { linkedListToArray, SinglyLinkedList, SinglyLinkedListNode } from ".";

export function insertNodeAtPosition(llist: SinglyLinkedList, data: number, position: number): SinglyLinkedList {
    const head = llist.head
    if (head == null) return llist

    let nodeToReplace = head
    for (let i = 0; i < position - 1; i++) {
        if (nodeToReplace.next == null) return llist;
        nodeToReplace = nodeToReplace.next
    }

    // create new node that continues the link
    const nextNode = new SinglyLinkedListNode(data)

    // swap previous next into new one
    nextNode.next = nodeToReplace.next

    // insert new node into current lineup
    nodeToReplace.next = nextNode

    return llist
}

describe('insertNodeAtPosition', function() {
    it('passes test cases', function() {
        const myLinkedList = new SinglyLinkedList()
        myLinkedList.insertNode(16)
        myLinkedList.insertNode(13)
        myLinkedList.insertNode(7)

        const result = insertNodeAtPosition(myLinkedList, 1, 2);

        expect(linkedListToArray(result.head)).to.deep.equal([ 16, 13, 1, 7 ]);
    })
})

