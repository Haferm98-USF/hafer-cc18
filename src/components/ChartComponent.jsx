import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto'

//Task 2: Create the Reusable ChartComponent

const ChartComponent = ({type, data, options}) => 
{
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect (() =>
    {
        const ctx = chartRef.current.getContext('2d');

        if (chartInstanceRef.current) 
        {
            chartInstanceRef.current.destory*();
        }
        ChartInstanceRef.current = new Chart(ctx, 
            {
                type,
                data,
                options,
            }
        );

        return () => 
        {
            if (chartInstanceRef.current)
            {
                chartInstanceRef.current.destory();
                chartInstanceRef.current = null;
            }
        };
        } 
        {type, data, options}
    );
    return <canvas ref={chartRef> </canvas>};
    }
exort default ChartComponent;