export function main() {
    timeConversion('12:01:02AM') // "00:01:02"

}

function timeConversion(str: string) {
    let isAM = str.slice(-2) == "AM";
    let [hour, min, sec] = str.slice(0, -2).split(":").map(x=> Number(x));

    if (!isAM && hour != 12) hour += 12
    if (isAM && hour === 12) hour = 0

    return [hour, min, sec].map(x => String(x).padStart(2, "0")).join(":");
}

main()
