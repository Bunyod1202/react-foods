import React from "react";
import ReactApexChart from "react-apexcharts"
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [75, 55, 67,0],
      options: {
        chart: {
          width: '100%',
          height: 10,
          type: 'radialBar',
        },
        stroke: {
      lineCap: "round",
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
        labels: ['Delivery', 'To Go', 'Dine In', ''],
        colors:['#65B0F6',"#FFB572","#FF7CA3"]
   
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