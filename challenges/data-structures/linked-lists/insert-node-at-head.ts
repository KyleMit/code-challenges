import { SinglyLinkedList, SinglyLinkedListNode } from "./_utils";


export function main() {


    const myLinkedList = new SinglyLinkedList()
    myLinkedList.insertNode(16)
    myLinkedList.insertNode(13)

    const result = insertNodeAtHead(myLinkedList.head, 3);

    console.log(result);

}

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head: SinglyLinkedListNode | null, data: number): SinglyLinkedListNode {
    const newHeadNode = new SinglyLinkedListNode(data);
    newHeadNode.next = head;
    return newHeadNode;
}


main()
