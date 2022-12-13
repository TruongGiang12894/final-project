import React from 'react';
import Chart from 'react-apexcharts';
import './style.css'

function DisplayChart(props) {
    const barchart = {
        options: {
            chart: {
                id: "bar",
                toolbar: {
                    show: false
                },
                stacked: true,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                tickPlacement: 'on'
            },
            legend: {
                position: 'top'
            }
        },
        series: [
            {
                name: "Latop",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "Iphone",
                data: [35, 30, 55, 40, 60, 55, 80, 71]
            },
            {
                name: "Accessories",
                data: [15, 10, 25, 25, 46, 25, 30, 41]
            }
        ]
    }

    const piechart = {
        options: {
            chart: {
                type: "pie",
                toolbar: {
                    show: false
                },
                offsetY: 20,
            },
            labels: ['Laptop', 'Iphone', 'Accessories'],
            legend: {
                position: 'top'
            },

        },
        series: [30, 50, 90],

    }

    return (
        <div className='charts'>
            <div className='bar'>
                <Chart options={barchart.options}
                    series={barchart.series}
                    type='bar'
                />
            </div>
            <div className='pie'>
                <Chart options={piechart.options}
                    series={piechart.series}
                    type='pie'
                />
            </div>
        </div>
        

    );
}

export default DisplayChart;