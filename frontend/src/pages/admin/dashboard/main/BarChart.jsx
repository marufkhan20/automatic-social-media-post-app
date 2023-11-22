
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        legend: {
            display: null,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
    
};

const labels = ['Dec 20', 'Jan 21','Feb 21', 'Mar 21', 'Apr 21', 'May 21'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Sales',
            data: [200, 200, 200, 200, 200, 200, 200], // Replace with your own data
            backgroundColor: '#FF5FC0', // Set the color for the first bar
            stack: 'Stack 0',
        },
        {
            label: 'Sales',
            data: [500, 500, 500, 500, 600, 700, 800], // Replace with your own data
            backgroundColor: '#012B6D', // Set the color for the second bar
            stack: 'Stack 1',
        },
       
    ],
};

export function BarChart() {
    return <Bar options={options} data={data} />;
}
