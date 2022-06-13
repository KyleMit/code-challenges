import { SinglyLinkedList, SinglyLinkedListNode } from "./_utils";
import sinon from "sinon";

function printLinkedList(head: SinglyLinkedListNode | null): void {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}


describe('printLinkedList', function() {

    it('passes test cases', function() {

        const logStub = sinon.stub(console, "log").returns();

        const myLinkedList = new SinglyLinkedList()
        myLinkedList.insertNode(16)
        myLinkedList.insertNode(13)

        printLinkedList(myLinkedList.head);

        expect(logStub.calledWith(16)).to.be.true
        expect(logStub.calledWith(13)).to.be.true

        logStub.restore();
    })
})

