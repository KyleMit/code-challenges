import { SinglyLinkedList, SinglyLinkedListNode } from "./_utils";


export function main() {
    const myLinkedList = new SinglyLinkedList()
    myLinkedList.insertNode(16)
    myLinkedList.insertNode(13)
    myLinkedList.insertNode(7)

    const result = insertNodeAtPosition(myLinkedList.head, 1, 2);

    console.log(result);

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


function insertNodeAtPosition(llist, data, position) {
    // Write your code here

}

main();
