import React from "react";
import ReactApexChart from "react-apexcharts"
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55, 67,0],
      options: {
        chart: {
          width: '100%',
          height: 10,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
             
            }
          }
        },
        labels: ['Apples', 'Oranges', 'Bananas', ''],
        responsive: [{
          breakpoint: 180,
          options: {
            chart: {
              width: 10
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
</div>


    );
  }
}export default ApexChart