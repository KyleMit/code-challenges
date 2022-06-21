// https://leetcode.com/problems/furthest-building-you-can-reach/

export function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    // use ladders on highest delta

    let newMaxDelta = true;
    let maxDeltas = new Map<number,number>() // index, height

    while (newMaxDelta) {
        newMaxDelta = false;
        let remainingBricks = bricks; // start each try with full bricks

        for (let i=0; i<heights.length; i++) {
            // if on last, we made it, return index
            if (i===heights.length-1) return i;

            const delta = heights[i+1] - heights[i]

            // keep going if we're going down
            if (delta<=0) { continue }

            // check if we should use max delta
            if (maxDeltas.has(i)) {
                // don't need to decrement, just only use available deltas, go to next building
                continue;
            }

            // check if we should add cur deltas
            const smallestLadder = [...maxDeltas.entries()].sort((a,b) => a[1] - b[1])[0] ?? [0,0]

            // replace ladder if we found a bigger deltas
            // and we can cover previous ladder with remaining bricks
            const shouldReplaceLadder = delta > smallestLadder[1] && remainingBricks > smallestLadder[1]

            if (maxDeltas.size < ladders || shouldReplaceLadder) {
                if (maxDeltas.size == ladders) {
                    maxDeltas.delete(smallestLadder[0])
                }
                maxDeltas.set(i, delta)
                newMaxDelta = true;
                break; // exit for loop, start over in while loop
            }

            // now we gotta use bricks
            // decrement
            remainingBricks -= delta;

            // if we can't make it, return where we are
            if (remainingBricks < 0) { return i }

            // otherwise, proceed to next building
        }
    }

    return heights.length;
};

describe('furthestBuilding', function() {
    it('passes test cases', function() {
        expect(furthestBuilding([14,3,19,3], 17, 0)).to.equal(3);
        expect(furthestBuilding([4,12,2,7, 3,18,20, 3,19], 10, 2)).to.equal(7);
    })
})
