export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode) {
        this.val = val ?? 0
        this.next = next ?? null
    }
}

export class LinkedList {
    static fromArray(arr: number[]): ListNode | null {
        if (arr.length == 0) return null;
        const head = new ListNode(arr[0])
        let node = head;
        for (let i=1; i<arr.length; i++) {
            const val = arr[i];
            node.next = new ListNode(val)
            node = node.next
        }
        return head;
    }
    static toArray(head: ListNode | null): number[] {
        const arr = []
        let node = head
        while (node) {
            arr.push(node.val)
            node = node.next
        }
        return arr;
    }
}
