export function main() {
    staircase(6)
    //      #
    //     ##
    //    ###
    //   ####
    //  #####
    // ######

}

function staircase(n: number) {
    let stairs = Array.from({length: n}, (_, i) => {
        return " ".repeat(n - i - 1) + "#".repeat(i + 1)
    })
    stairs.forEach(step => {
        console.log(step)
    })
}


main()
