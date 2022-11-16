import React from 'react';
import Chart from 'react-apexcharts';
import './surveyChart.scss';

class SurveyChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [{
            name: "Patients 2019",
            type: 'line',
            data: [50, 80, 110, 100, 150, 105, 130, 155, 135, 90, 120, 180]
        },{
            name: "Patients 2020",
            type: 'area',
            data: [140, 105, 210, 120, 160, 140, 180, 150, 140, 220, 165, 245]
        }],
        options: {
          chart: {
            type: 'line',
            stacked: false,
            height: '300px',
            width: '550px',
            foreColor: '#A0A4A8',
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
                show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          markers: {
            size: 0,
            hover: {
                sizeOffset: 4,
                color: '#FFFFFF'
            }
          },
          colors: ['#FAC032', '#336CFB'],
          fill: {
            type:'gradient',
            gradient:  {
                type: 'vertical',
                gradientToColors: ['rgba(51, 108, 251, 0.2)', 'rgba(51, 108, 251, 0.02)'],
                shadeIntensity: 1,
                opacityFrom: 0.7,
                stops: [0, 100]
            }
          },
          title: {
            text: 'Hospital Survey',
            align: 'left',
            offsetY: 15,
            style: {
                fontSize:  '20px',
                fontWeight:  700,
                color:  '#25282B'
            }
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: -30,
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          grid: {
            strokeDashArray: 10,
            borderColor: '#D7DBDE',
          },
          xaxis: {
            categories: ['2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6', '2020-7', '2020-8', '2020-9', '2020-10', '2020-11', '2020-12'],
            tickPlacement: 'between'
          },
        },
      
      
      };
    }
    render() {
      return (
        <div id="chart" className='chart__survey'>
            <Chart options={this.state.options} series={this.state.series} height={350} width={1050} />
        </div>
      );
    }
  }

export default SurveyChart;