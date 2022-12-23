import React from "react";
import ReactApexChart from "react-apexcharts"
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [44, 55, 67],
      options: {
        chart: {
          height: 176,
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
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  return 249
                }
              }
            }
          }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
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