// https://leetcode.com/problems/furthest-building-you-can-reach/



export function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const maxLadders: number[] = [];
    let smallestLadder = 0

    for (let i=0; i<heights.length; i++) {
        // if on last, we made it, return index
        if (i===heights.length-1) return i;

        const delta = heights[i+1] - heights[i]

        // keep going if we're going down
        if (delta<=0) { continue }

        // replace ladder if we found a bigger deltas
        // and we can cover previous ladder with remaining bricks
        const shouldReplaceLadder = delta > smallestLadder && bricks > smallestLadder

        if (maxLadders.length < ladders || shouldReplaceLadder) {
            if (maxLadders.length == ladders) {
                // to swap a ladder, it'll cost you the bricks that ladder gave us
                bricks -= smallestLadder

                // todo - expensive
                const smallestLadderPos = maxLadders.indexOf(smallestLadder)
                maxLadders.splice(smallestLadderPos, 1)
            }
            // add new ladder to collection
            maxLadders.push(delta)
            // find and set new smallest ladder
            // todo - expensive
            smallestLadder = maxLadders.sort((a,b) => a - b)[0] ?? 0
            continue;
        }

        // now we gotta use bricks
        // decrement
        bricks -= delta;

        // if we can't make it, return where we are
        if (bricks < 0) { return i }

        // otherwise, proceed to next building
    }


    return heights.length;
};

describe('furthestBuilding', function() {
    it('passes test cases', function() {
        expect(furthestBuilding([14,3,19,3], 17, 0)).to.equal(3);
        expect(furthestBuilding([4,12,2,7, 3,18,20, 3,19], 10, 2)).to.equal(7);
    })
})
