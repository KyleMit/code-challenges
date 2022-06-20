export interface ITrie {
    insert(word: string): void
    search(word: string): boolean
    startsWith(prefix: string): boolean
}


export class Trie implements ITrie {
    #storage = new Set<string>();
    insert = (word: string): void => void this.#storage.add(word)
    search = (word: string): boolean => this.#storage.has(word)
    startsWith = (prefix: string): boolean => [...this.#storage.values()].some(x => x.startsWith(prefix))
}

export class TrieNode {
    isEnd: boolean = false;
    children: Map<string,TrieNode> = new Map<string,TrieNode>();
}

export class Trie2 implements ITrie {
    #head = new TrieNode();

    insert(word: string): void {
        let node = this.#head;
        for(let i=0; i<word.length; i++) {
            const char = word[i]
            if (node.children.has(char)) {
                node = node.children.get(char)!
            } else {
                const next = new TrieNode()
                node.children.set(char, next)
                node = next;
            }
        }
        node.isEnd = true
    }

    search = (word: string) => Boolean(this.#traverse(word)?.isEnd)
    startsWith = (prefix: string) => Boolean(this.#traverse(prefix))

    #traverse(str: string): TrieNode | null {
        let node = this.#head;
        for(let i=0; i<str.length; i++) {
            const char = str[i]
            if (node.children.has(char)) {
                node = node.children.get(char)!
            } else {
                return null;
            }
        }
        return node;
    }


}


describe('Trie', function() {
    it('passes test cases', () => testCases(new Trie()))
})
describe('Trie2', function() {
    it('passes test cases', () => testCases(new Trie2()))
})


function testCases(trie: ITrie) {
    trie.insert("apple");
    expect(trie.search("apple")).to.equal(true)
    expect(trie.search("app")).to.equal(false)
    expect(trie.startsWith("app")).to.equal(true)
    trie.insert("app");
    expect(trie.search("app")).to.equal(true)
}
