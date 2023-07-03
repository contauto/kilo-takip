import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Chart({data,name}) {
    const graphData = data[0].map((item, index) => {
        return{
            info: item,
            date: data[1][index]
        }
    })


    return (
        <div>
            <LineChart
                width={500} height={300}
                data={graphData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="info" name={name} stroke="red" activeDot={{ r: 12 }} />
            </LineChart>
        </div>
    );
}

export default Chart;