// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/

import { linkedListToArray, SinglyLinkedList, SinglyLinkedListNode } from ".";

export function deleteNode(head: SinglyLinkedListNode, position: number): SinglyLinkedListNode {
    if (position == 0) return head.next!;

    let node = head;

    // move set number of times
    for(let i = 0; i < position - 1; i++) {
        node = node.next!;
    }

    node.next = node.next!.next;

    return head
}

describe('deleteNode', function() {
    it('passes test cases', function() {
        const myLinkedList = new SinglyLinkedList()
        myLinkedList.insertNode(16)
        myLinkedList.insertNode(13)
        myLinkedList.insertNode(7)

        const result = deleteNode(myLinkedList.head!, 1);

        expect(linkedListToArray(result)).to.deep.equal([16,7]);
    })
})

