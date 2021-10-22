function main() {
    const strings = [ 'aba', 'baba', 'aba', 'xzxb' ]
    const queries = [ 'aba', 'xzxb', 'ab' ]
    const result = matchingStrings(strings, queries);
    const expected = [2,1,0]
    console.log({expected, result});
}

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings: string[], queries: string[]): number[] {
    // Write your code here

}

main()
