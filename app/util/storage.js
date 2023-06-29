import bmi from "@/app/util/bmi";

export default function storage(key) {
    const data = localStorage.getItem(key);
    const allHeights = [];
    const allWeights = [];
    const allDates = [];
    const allBmis = [];

    if (data) {
        const cleanedData = data.replace(/\[|\]/g, '');
        const dataArray = cleanedData.slice(0, -1).split(',');

        for (const item of dataArray) {
            const [height, weight, date] = item.split(';');
            const cleanHeight = height.trim();
            const cleanWeight = weight.trim();
            const cleanDate = date.trim();

            allHeights.push(cleanHeight);
            allWeights.push(cleanWeight);
            allDates.push(cleanDate);
            allBmis.push(bmi(cleanHeight, cleanWeight));
        }
    }
    console.log(allHeights, allWeights, allDates, allBmis)
    return {allHeights, allWeights, allDates, allBmis};
}