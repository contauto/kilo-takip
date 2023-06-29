export default function dateUtil(first,second) {
    const firstDate = stringToDate(first)
    const secondDate = stringToDate(second)
    return Math.abs(firstDate - secondDate) / (1000 * 60 * 60 * 24);
}

export function stringToDate(string) {
    const dateTimeParts = string.split(" ");
    const dateParts = dateTimeParts[0].split(".");
    const timeParts = dateTimeParts[1].split(":");
    const year = parseInt(dateParts[2]);
    const month = parseInt(dateParts[1]) - 1; // Month is zero-based
    const day = parseInt(dateParts[0]);
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);
    const second = parseInt(timeParts[2]);
    return new Date(year, month, day, hour, minute, second);

}