import { Tooltip } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Component, SetStateAction, useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr : false});
// import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

interface spark3 {
  options?: ApexOptions,
  width?: number;
  height?: string | number,
  series?: ApexOptions['series'],
  label?: XAxisAnnotations
  color?: string | string[] | (string & string[]) | undefined
  endingShape?: string
  enabled?: boolean;
}

//Bitcoin

export class Bitcoin extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
  
      this.state = {
        series: [
          {
            data: [34, 55, 41, 67, 22, 43, 21]
          },
        ],
        color: ['#47bbed'],
        options: {
          chart: {
            events: {
              mounted: (chart: { windowResizeHandler: () => void; }) => {
                chart.windowResizeHandler();
              }
            },
            sparkline: {
              enabled: true
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 3,
              blur: 3,
              opacity: 0.2
            },
            type: 'line',
            height: 20,
            width: 100
          },
          tooltip: {
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return '';
                }
              }
            },
            marker: {
              show: false
            }
          },
          colors: ["#47bbed"],
          stroke: {
            width: [1.5],
            curve: ['smooth'],
          },
          xaxis: {
            crosshairs: {
              show: false,
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.9,
              opacityTo: 0.9,
              stops: [0, 98],
            }
          },
        }
  
      };
    }
  
    render() {
      return (
  
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={100} />
  
      );
    }
  }

  //Ethereum
export class Ethereum extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
  
      this.state = {
        series: [
          {
            data: [34, 55, 41, 47, 32, 53, 31]
          },
        ],
        color: ['#28D193'],
        options: {
          chart: {
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            sparkline: {
              enabled: true
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 3,
              blur: 3,
              opacity: 0.2
            },
            type: 'line',
            height: 20,
            width: 100
          },
          tooltip: {
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return '';
                }
              }
            },
            marker: {
              show: false
            }
          },
          colors: ["#28D193"],
          stroke: {
            width: [1.5],
            curve: ['smooth'],
          },
          xaxis: {
            crosshairs: {
              show: false,
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.9,
              opacityTo: 0.9,
              stops: [0, 98],
            }
          },
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={100} />
  
      );
    }
  }
  
  //Dash
  export class Dash extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
  
      this.state = {
        series: [
          {
            data: [31, 53, 32, 47, 41, 55, 44]
          },
        ],
        color: ['#FF534D'],
        options: {
          chart: {
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            sparkline: {
              enabled: true
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 3,
              // right: 6,
              blur: 3,
              opacity: 0.2
            },
            type: 'line',
            height: 20,
            width: 100
          },
          tooltip: {
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return '';
                }
              }
            },
            marker: {
              show: false
            }
          },
          colors: ["#FF534D"],
          stroke: {
            width: [1.5],
            curve: ['smooth'],
          },
          xaxis: {
            crosshairs: {
              show: false,
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.9,
              opacityTo: 0.9,
              stops: [0, 98],
            }
          },
        }
  
      };
    }
  
    render() {
      return (
        // <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={100} />
        // </div>
  
      );
    }
  }

  //Golem

  export class Golem extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
  
      this.state = {
        series: [
          {
            data: [21, 43, 22, 45, 35, 55, 34]
          },
        ],
        color: ['#FFBE14'],
        options: {
          chart: {
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            sparkline: {
              enabled: true
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 3,
              // right: 6,
              blur: 3,
              opacity: 0.2
            },
            type: 'line',
            height: 20,
            width: 100
          },
          tooltip: {
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return '';
                }
              }
            },
            marker: {
              show: false
            }
          },
          colors: ["#FFBE14"],
          stroke: {
            width: [1.5],
            curve: ['smooth'],
          },
          xaxis: {
            crosshairs: {
              show: false,
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.9,
              opacityTo: 0.9,
              stops: [0, 98],
            }
          },
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={20} width={100} />
  
      );
    }
  }

  // Total Revenue

export class TotalRevenue extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
  
      this.state = {
        series: [{
          name: "Revenue",
          data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55]
        }],
        options: {
          chart: {
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            height: 180,
            type: "area",
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1.4],
            show: true,
            curve: ['smooth'],
          },
          xaxis: {
            crosshairs: {
              show: false,
            }
          },
          legend: {
            show: false
          },
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          markers: {
            size: 0
          },
          colors: ["#83b2ed"],
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.4,
              opacityTo: 0.7,
              stops: [0, 100]
            }
          },
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={180} />
  
      );
    }
  }

  //Applicants

export class Applicants extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
  
      this.state = {
        series: [{
          name: 'Job Applied',
          type: 'line',
          data: [25, 50, 30, 55, 20, 45, 30]
        }, {
          name: 'Job Viewed',
          type: 'area',
          data: [35, 25, 40, 30, 45, 35, 60]
        }],
        options: {
          colors: ["#845adf", "rgba(132, 90, 223, 0.1)"],
          chart: {
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            height: 348,
            type: 'line',
            stacked: false,
            toolbar: {
              show: false
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 7,
              left: 1,
              blur: 3,
              color: '#000',
              opacity: 0.2
            },
          },
          grid: {
            borderColor: '#e9edf4',
            padding: {
              top: 10,
              right: 0,
              bottom: 0,
              left: 0
            },
          },
          stroke: {
            width: [2, 2],
            curve: 'smooth',
            dashArray: [0, 4]
          },
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          markers: {
            size: 4,
            hover: {
              size: 5
            }
          },
          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shadeIntensity: 1,
              shade: 'light',
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100]
            }
          },
          legend: {
            show: true,
            position: 'top',
            fontFamily: 'Inter, sans-serif',
            markers: {
              size:5,
            }
          },
          xaxis: {
            axisBorder: {
              show: true,
              color: 'rgba(119, 119, 142, 0.05)',
              offsetX: 0,
              offsetY: 0,
            },
            axisTicks: {
              show: true,
              borderType: 'solid',
              color: 'rgba(119, 119, 142, 0.05)',
              offsetX: 0,
              offsetY: 0
            },
            labels: {
              rotate: -90
            }
          },
          yaxis: {
            title: {
              style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600
              },
            },
            labels: {
              // formatter: function (y) {
              //   return y.toFixed(0) + "";
              // }
            }
          },
          tooltip: {
            shared: true,
            intersect: false,
            // y: {
            //   formatter: function (y) {
            //     // if (typeof y !== "undefined") {
            //     //   return y.toFixed(0) + " points";
            //     // }
            //     return y;
  
            //   }
            // }
          }
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
  
      );
    }
  }

  //Sessions By Device

  export class Sessions extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
  
      this.state = {
        series: [
          {
            name: "Tablet",
            data: [[10, 35, 80]]
          },
          {
            name: "Mobile",
            data: [[22, 10, 80]]
          },
          {
            name: "Desktop",
            data: [[25, 25, 150]]
          },
        ],
        options: {
          chart: {
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            height: 350,
            type: "bubble",
            toolbar: {
              show: false
            }
          },
          grid: {
            borderColor: '#f3f3f3',
            strokeDashArray: 3
          },
          colors: ["#26bf94", "#23b7e5", "rgb(132, 90 , 223)"],
          dataLabels: {
            enabled: false
          },
          legend: {
            show: true,
            fontSize: '13px',
            labels: {
              colors: '#959595',
            },
            markers: {
            size:5,
            },
          },
          xaxis: {
            min: 0,
            max: 50,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
          yaxis: {
            max: 50,
            labels: {
              show: false,
            },
          }
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="bubble" height={350} />
  
      );
    }
  }

  //Target Report
  
  export class Targetreport extends Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
  
      this.state = {
        series: [{
          data: [17, 22, 37, 47, 39, 28, 14],
          name: 'Revenue',
        }],
        options: {
          chart: {
            events: {
              mounted: (chart) => {
                chart.windowResizeHandler();
              }
            },
            type: 'bar',
            height: 235,
            toolbar: {
              show: false
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 6,
              left: 6,
              blur: 3,
              color: '#000',
              opacity: 0.05
            },
          },
          plotOptions: {
            bar: {
              columnWidth: '35%',
              borderRadius: 4,
              horizontal: false,
              colors: {
                ranges: [{
                  from: 41,
                  to: Infinity,
                  color: 'rgb(132, 90 , 223)'
                },
                {
                  from: 0,
                  to: 40,
                  color: 'rgba(132, 90,  223,0.1)'
                }]
              },
            }
          },
          colors: ["rgb(132, 90,  223)"],
          dataLabels: {
            enabled: false
          },
          grid: {
            show: false,
            borderColor: 'transparent',
            padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            yaxis: {
              lines: {
                show: false
              }
            },
          },
          xaxis: {
            categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              rotate: -90,
              style: {
                fontFamily: 'Inter, sans-serif',
              },
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              show: false
            }
          }
        }
  
      };
    }
  
    render() {
      return (
  
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={235} />
  
      );
    }
  }

  //Sales Data

  export const Salesdata = [
    { id: 1, icon: 'ri-briefcase-2-line text-[1rem]', color: 'primary', text1: 'Total Sales', text2: '15,800', badge: '+25.8%', bg:'success/10'},
    { id: 2, icon: 'ri-bill-line text-[1rem]', color: 'secondary', text1: 'Total Tax', text2: '$12,650', badge: '+12.2%', bg:'success/10'},
    { id: 3, icon: 'ri-wallet-2-line text-[1rem]', color: 'success', text1: 'Total Income', text2: '$14,800', badge: '+7.45%', bg:'success/10'},
    { id: 4, icon: 'ri-line-chart-line text-[1rem]', color: 'info', text1: 'Total Expenses', text2: '$7,566', badge: '-3.21%', bg:'danger/10'},
    { id: 5, icon: 'ri-money-dollar-box-line text-[1rem]', color: 'warning', text1: 'Sales Profit', text2: '$7,474', badge:'+36.03%', bg:'success/10'},
    { id: 6, icon: 'ri-profile-line text-[1rem]', color: 'danger', text1: 'Opex Ratio', text2: '32%', badge: '+0.89%', bg:'success/10'},
  ];
