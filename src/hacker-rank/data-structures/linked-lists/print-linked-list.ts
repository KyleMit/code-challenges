// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/

import { SinglyLinkedList, SinglyLinkedListNode } from ".";
import sinon, { SinonStub } from "sinon";

function printLinkedList(head: SinglyLinkedListNode | null): void {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}


describe('printLinkedList', function() {

    let logStub: SinonStub;
    beforeEach(() => {
        logStub = sinon.stub(console, "log").returns();
    })
    afterEach(() => {
        logStub.restore();
    })

    it('passes test cases', function() {
        const myLinkedList = new SinglyLinkedList()
        myLinkedList.insertNode(16)
        myLinkedList.insertNode(13)

        printLinkedList(myLinkedList.head);

        expect(logStub.calledWith(16)).to.be.true
        expect(logStub.calledWith(13)).to.be.true
    })
})

