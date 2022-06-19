// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem


import { linkedListToArray, SinglyLinkedList, SinglyLinkedListNode } from ".";

function insertNodeAtTail(head: SinglyLinkedListNode | null, data: number): SinglyLinkedListNode {
    if (head == null){
        head = new SinglyLinkedListNode(data);
    }
    else {
        var node = head;
        while (node.next != null){
            node = node.next;
        }
        node.next = new SinglyLinkedListNode(data);
    }
    return head;
}

describe('insertNodeAtTail', function() {
    it('passes test cases', function() {
        const myLinkedList = new SinglyLinkedList()
        myLinkedList.insertNode(16)
        myLinkedList.insertNode(13)

        const result = insertNodeAtTail(myLinkedList.head, 3);

        expect(linkedListToArray(result)).to.deep.equal([ 16, 13, 3 ]);
    })
})

