import React from 'react'
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
function Chart({title, data, dataKey, grid}) {
   
    return (
        <div className='chart__container'>
            <h1></h1>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
            <XAxis dataKey={dataKey} stroke='#5550bd'/>
            <Line type='monotone' dataKey={title} stroke='#5550bd'/>
            <Tooltip />
          { grid &&  <CartesianGrid  stroke='#e0dfdf' strokeDasharray='5 5'/>}
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
