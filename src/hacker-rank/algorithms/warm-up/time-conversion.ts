export function timeConversion(str: string) {
    let isAM = str.slice(-2) == "AM";
    let [hour, min, sec] = str.slice(0, -2).split(":").map(x=> Number(x));

    if (!isAM && hour != 12) hour += 12
    if (isAM && hour === 12) hour = 0

    return [hour, min, sec].map(x => String(x).padStart(2, "0")).join(":");
}

describe('timeConversion', function() {
    it('passes test cases', function() {
        expect(timeConversion('12:01:02AM')).to.equal("00:01:02");
    })
})
