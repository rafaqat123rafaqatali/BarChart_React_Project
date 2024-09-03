// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChart.css';  // Importing the CSS file
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    // JSON data
    const jsonData = [
        {
            "2024": [
                {
                    "01": [
                        { "2024/01/01 , 00:00:00": 300 },
                        { "2024/01/02 , 00:00:00": 400 },
                        { "2024/01/03 , 00:00:00": 550 }
                    ]
                },
                {
                    "02": [
                        { "2024/02/01 , 00:00:00": 300 },
                        { "2024/02/02 , 00:00:00": 400 },
                        { "2024/02/03 , 00:00:00": 550 }
                    ]
                }
            ]
        }
    ];

    // Extracting data
    const dates = [];
    const values = [];

    jsonData.forEach(yearData => {
        for (const year in yearData) {
            yearData[year].forEach(monthData => {
                for (const month in monthData) {
                    monthData[month].forEach(dayData => {
                        for (const date in dayData) {
                            dates.push(date);
                            values.push(dayData[date]);
                        }
                    });
                }
            });
        }
    });

    // Chart data
    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Values',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Data from Endpoint',
            },
        },
    };

    return (
        <div className="chart-container">
            <div className="chart-title">Bar Chart Example</div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
