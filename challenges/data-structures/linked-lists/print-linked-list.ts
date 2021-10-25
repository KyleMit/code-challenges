import { SinglyLinkedList, SinglyLinkedListNode } from "./_utils";

export function main() {


    const myLinkedList = new SinglyLinkedList()
    myLinkedList.insertNode(16)
    myLinkedList.insertNode(13)

    printLinkedList(myLinkedList.head);
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
function printLinkedList(head: SinglyLinkedListNode | null): void {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}


main()
