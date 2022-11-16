import React from 'react';
import Chart from 'react-apexcharts';
import './moneyChart.scss';

class MoneyChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [{
            name: "Money",
            data: props.data
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
            },
            selection: {
                yaxis: {
                    min: 1,
                    max: 100
                } 
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          markers: {
            size: 9,
            colors: props.markColor,
            strokeWidth: 8
          },
          colors: [props.optColor],
          title: {
            text: props.title,
            align: 'left',
            margin: 20,
            style: {
                fontSize:  '20px',
                fontWeight:  700,
                color:  '#25282B'
            }
          },
          subtitle: {
            text: props.subtitle,
            align: 'right',
            margin: -30,
            style: {
                fontSize:  '12px',
                fontWeight:  700,
                color:  '#A0A4A8'
            }
          },
          grid: {
            strokeDashArray: 10,
            borderColor: '#D7DBDE',
          },
          xaxis: {
            categories: props.xCategories,
            tickPlacement: 'between'
          },
          yaxis: {
            labels: {
              formatter: function (value) {
                return "$" + value + ',000';
              }
            },
            decimalsInFloat: 1,
            tickAmount: 5,
            min: 0,
            max: 100, 
            range: 20
          },
        },
      
      
      };
    }
    render() {
      return (
        <div id="chart" className='chart__money'>
            <Chart options={this.state.options} series={this.state.series} type="line" height={270} width={500} />
        </div>
      );
    }
  }

export default MoneyChart;