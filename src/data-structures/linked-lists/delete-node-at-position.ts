import { printLinkedList, SinglyLinkedList, SinglyLinkedListNode } from "./_utils";


export function main() {
    const myLinkedList = new SinglyLinkedList()
    myLinkedList.insertNode(16)
    myLinkedList.insertNode(13)
    myLinkedList.insertNode(7)

    const result = deleteNode(myLinkedList.head!, 1);

    printLinkedList(result);

}

/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     number data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(head: SinglyLinkedListNode, position: number): SinglyLinkedListNode {
    if (position == 0) return head.next!;

    let node = head;

    // move set number of times
    for(let i = 0; i < position - 1; i++) {
        node = node.next!;
    }

    node.next = node.next!.next;

    return head
}

main();
