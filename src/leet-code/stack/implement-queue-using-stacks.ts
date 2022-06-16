// https://leetcode.com/problems/implement-queue-using-stacks/

interface IStack {
    push(x: number): void
    pop(): number
    peek(): number
    empty(): boolean
}

class Stack implements IStack {
    #storage: number[] = [];

    push = (x: number) => this.#storage.push(x);
    pop = () => this.#storage.pop()!;
    peek = () => this.#storage.at(-1)!
    empty = () => this.#storage.length === 0
}

export class MyQueue implements IStack {
    #stack: number[] = [];

    push = (x: number) => this.#stack.push(x);
    pop = () => this.#stack.shift()!;
    peek = () => this.#stack[0]!
    empty = () => this.#stack.length === 0
}

export class MyQueue2 implements IStack {
    #input = new Stack();
    #output = new Stack();

    push = (x: number) => this.#input.push(x);

    pop(): number {
        this.peek();
        return this.#output.pop();
    }
    peek(): number {
        if (this.#output.empty()) {
            while (!this.#input.empty()) {
                this.#output.push(this.#input.pop())
            }
        }
        return this.#output.peek();
    }
    empty = () => this.#input.empty() && this.#output.empty()
}


describe('MyQueue', function() {
    it('passes test cases', () => testCases(new MyQueue()))
})
describe('MyQueue2', function() {
    it('passes test cases', () => testCases(new MyQueue2()))
})

function testCases(myQueue: IStack) {
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    expect(myQueue.peek()).to.equal(1);
    expect(myQueue.pop()).to.equal(1);
    expect(myQueue.empty()).to.equal(false);
}
