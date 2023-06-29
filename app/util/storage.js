import bmi from "@/app/util/bmi";
import {useEffect, useState} from "react";

export default function storage(key) {
    const [storageData, setStorageData] = useState();
    const allHeights = [];
    const allWeights = [];
    const allDates = [];
    const allBmis = [];

    useEffect(() => {
        setStorageData(localStorage.getItem(key));
    }, []);


    if (storageData) {
        const cleanedData = storageData.replace(/\[|\]/g, '');
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
    return {allHeights, allWeights, allDates, allBmis};
}