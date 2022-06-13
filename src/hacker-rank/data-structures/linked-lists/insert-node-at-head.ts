// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/

import { linkedListToArray, SinglyLinkedList, SinglyLinkedListNode } from "./_utils";

function insertNodeAtHead(head: SinglyLinkedListNode | null, data: number): SinglyLinkedListNode {
    const newHeadNode = new SinglyLinkedListNode(data);
    newHeadNode.next = head;
    return newHeadNode;
}

describe('insertNodeAtHead', function() {
    it('passes test cases', function() {
        const myLinkedList = new SinglyLinkedList()
        myLinkedList.insertNode(16)
        myLinkedList.insertNode(13)

        const result = insertNodeAtHead(myLinkedList.head, 3);

        expect(linkedListToArray(result)).to.deep.equal([ 3, 16, 13 ]);
    })
})

