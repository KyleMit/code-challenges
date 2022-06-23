
export class MinHeap {
    #storage: number[] = []

    push(...values: number[]) {
        for (const val of values) {
            this.#insert(val);
        }
    }

    pop(): number {
        const head = this.#storage[0]

        // take last item and place at head
        this.#storage[0] = this.#storage.pop()!

        // ensure we're in correct order
        this.#heapify(0)

        return head
    }

    // extractMin
    peek = (): number => this.#storage[0]
    size = (): number => this.#storage.length;

    #parentPos = (pos: number): number => Math.floor((pos - 1) /2)
    #leftChildPos = (pos: number): number => pos * 2 + 1
    #rightChildPos = (pos: number): number => pos * 2 + 2
    #isLeaf = (pos: number): boolean => pos > Math.floor(this.size() / 2)
                                     && pos <= this.size()

    #insert(val: number) {
        // add to next available storage slot
        this.#storage[this.size()] = val
        let currentPos = this.size() - 1

        // while parent is bigger, swap and check again
        while (this.#storage[currentPos] < this.#storage[this.#parentPos(currentPos)]) {
            this.#swap(currentPos, this.#parentPos(currentPos))
            currentPos = this.#parentPos(currentPos)
        }
    }

    #swap(pos1: number, pos2: number) {
        const a = this.#storage[pos1]
        const b = this.#storage[pos2]

        this.#storage[pos1] = b
        this.#storage[pos2] = a
    }

    #heapify(pos: number): void {
        if (this.#isLeaf(pos)) { return }

        const lChild = this.#leftChildPos(pos)
        const rChild = this.#rightChildPos(pos)

        const curLargerThanChild = this.#storage[pos] > this.#storage[lChild]
                                || this.#storage[pos] > this.#storage[rChild]
        if (curLargerThanChild) {
            const newPos = this.#storage[lChild] < this.#storage[rChild] ? lChild : rChild
            this.#swap(pos, newPos)
            this.#heapify(newPos)
        }
    }
}
