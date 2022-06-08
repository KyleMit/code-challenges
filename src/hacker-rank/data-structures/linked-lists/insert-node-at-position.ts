import { printLinkedList, SinglyLinkedList, SinglyLinkedListNode } from "./_utils";


export function main() {
    const myLinkedList = new SinglyLinkedList()
    myLinkedList.insertNode(16)
    myLinkedList.insertNode(13)
    myLinkedList.insertNode(7)

    const result = insertNodeAtPosition(myLinkedList, 1, 2);

    printLinkedList(result.head);

}

/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
 */


function insertNodeAtPosition(llist: SinglyLinkedList, data: number, position: number): SinglyLinkedList {
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

main();
