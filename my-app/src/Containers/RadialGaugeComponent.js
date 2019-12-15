import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Radial.css';
//import Page from './Page';


class MixedChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          width: [0,2]
        },
        title: {
          text: 'Today Environment'
        },
        labels: ['07 Dec 2019', '08 Dec 2019', '09 Dec 2019', '10 Dec 2019', '11 Dec 2019', '12 Dec 2019', '13 Dec 2019', '14 Dec 2019', '15 Dec 2019', '16 Dec 2019', '17 Dec 2019', '18 Dec 2019'
        ],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: 'Temperature',
          },

        }, {
          opposite: true,
          title: {
            text: 'Humidity'
          }
        }]
      },
      series: [{
        name: 'Temperature',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Humidity',
        type: 'line',
        data: [12, 22, 3, 7, 3, 22, 7, 13, 27, 12, 6, 26]
      },{
        name: 'WaterMoisture',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      },
      {
        name: 'Pressure',
        type: 'bar',
        data: [3, 2, 5, 7, 13, 12, 17, 11, 2, 9, 12, 16]
      }
    
    ],
    }
  }

  render() {
    return (

      <div id="chart">
         <ReactApexChart options={this.state.options} series={this.state.series} 
        type="line" height="350" width="750" margintop="30%"  />  
      </div>

    );
  }
    }
export default MixedChart;