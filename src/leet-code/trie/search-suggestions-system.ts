// https://leetcode.com/problems/search-suggestions-system/

import { Trie } from "./implement-trie-prefix-tree";

export class TrieNode {
    constructor(val: string) {
        this.value = val
    }
    value: string;
    isEnd = false;
    children = new Map<string, TrieNode>()
}

export function suggestedProducts(products: string[], searchWord: string): string[][] {
    // build tree

    var trieRoot = new TrieNode("");

    const addWord = (word: string): void => {
        let node = trieRoot;
        for (let i=0; i<word.length; i++) {
            const char = word[i];
            const val = word.substring(0,i+1)
            if (node.children.has(char)) {
                node = node.children.get(char)!
            } else {
                const next = new TrieNode(val)
                node.children.set(char, next)
                node = next;
            }
        }
        node.isEnd = true;
    }

    const findMatchingNode = (word: string): TrieNode | null => {
        if (!word.length) return null;
        let node = trieRoot;
        for (const char of word) {
            if (node.children.has(char)) {
                node = node.children.get(char)!
            } else {
                return null
            }
        }
        return node;
    }

    const findChildrenWords = (root: TrieNode | null): string[] => {
        let words: string[] = [];
        if (!root) return words;

        const stack: TrieNode[] = []
        let node: TrieNode | null = root;

        while (node) {
            if (node.isEnd) {
                words.push(node.value)
            }
            stack.push(...node.children.values())
            node = stack.pop() ?? null;
        }

        return words;

    }

    for (const product of products) {
        addWord(product)
    }

    // iterate through search word length
    const output = []
    for (let i=0; i<searchWord.length; i++) {
        const partial = searchWord.substring(0,i+1);
        const words = findChildrenWords(findMatchingNode(partial))
        output.push(words.sort().slice(0,3))
    }

    return output;
};

describe('suggestedProducts', function() {
    it('example 1', function() {
        const products = ["mobile","mouse","moneypot","monitor","mousepad"]
        const searchWord = "mouse"
        const expected = [
            ["mobile","moneypot","monitor"],
            ["mobile","moneypot","monitor"],
            ["mouse","mousepad"],
            ["mouse","mousepad"],
            ["mouse","mousepad"]
        ]
        expect(suggestedProducts(products, searchWord)).to.deep.equal(expected);
    })

    it('example 2', function() {
        const products = ["havana"]
        const searchWord = "havana"
        const expected = [
            ["havana"],
            ["havana"],
            ["havana"],
            ["havana"],
            ["havana"],
            ["havana"]
        ]
        expect(suggestedProducts(products, searchWord)).to.deep.equal(expected);
    })

    it('example 3', function() {
        const products = ["bags","baggage","banner","box","cloths"]
        const searchWord = "bags"
        const expected = [
            ["baggage","bags","banner"],
            ["baggage","bags","banner"],
            ["baggage","bags"],
            ["bags"]
        ]
        expect(suggestedProducts(products, searchWord)).to.deep.equal(expected);
    })
})
