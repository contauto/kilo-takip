"use client"
import React from 'react';
import storage from "@/util/storage";
import Chart from "@/components/graph/chart";


function Charts() {
    const {allHeights, allWeights, allDates, allBmis}=storage("bmi")
    return (
        <div>
            <Chart name="Boy" data={[allHeights.reverse(),allDates.reverse()]}/>
            <Chart name="Kilo" data={[allWeights.reverse(),allDates.reverse()]}/>
            <Chart name="BMI" data={[allBmis.reverse(),allDates.reverse()]}/>
        </div>
    );
}

export default Charts;