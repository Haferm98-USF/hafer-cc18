import React from "react";
import ChartComponent from "./ChartComponent.jsx";

const BubbleChart = ({data}) =>
    {
        const bubbleChartData = 
        {
            labels: data.months,
            datasets:
        [
            {
                label: 'Sales, Profits and Expenses',
                data: data.expenses.map((expense, index) => (
                    {
                    x: expense,
                    y: data.profits[index],
                    r: data.sales[index] / 10,
                    })),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,  
            }
        ]
        };
        const bubbleChartOptions =
        {
            scales: 
            {
                x: {
                    title: {
                      display: true,
                      text: "Expenses",
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Profits",
                    },
                  },
                },
              };

        return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
    };
    export default BubbleChart;