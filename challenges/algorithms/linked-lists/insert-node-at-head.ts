class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
};

class SinglyLinkedList {
    head: SinglyLinkedListNode | null;
    tail: SinglyLinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData: number) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else if (this.tail != null) {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

export function main() {


    const myLinkedList = new SinglyLinkedList()
    myLinkedList.insertNode(16)
    myLinkedList.insertNode(13)

    const result = insertNodeAtHead(myLinkedList.head, 3);

    console.log(result);

}

// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head: SinglyLinkedListNode | null, data: number) {
    // todo
}


main()
