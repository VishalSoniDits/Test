Highcharts.chart("contain", {
  chart: {
    type: "area",
  },
  title: {
    text: "Sale Target/Achieved",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
  },
  yAxis: {
    title: {
      text: "Sale In USD",
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: false,
      },
      enableMouseTracking: false,
    },
  },
  //   series: [
  //     {
  //       name: "Sale",
  //       data: [18, 15, 20, 22, 20, 18, 26, 29, 32, 35],
  //       data1: [20, 18, 25, 10, 30, 22, 32, 30, 18, 15],

  //     },
  //   ],
  // });
  series: [
    {
      name: "Target",
      marker: {
        symbol: "square",
        radius: 3,
        lineColor: "#666666",
        lineWidth: 2,
      },
      data: [30, 35, 25, 45, 50, 40, 60, 55, 70, 65],
    },
    {
      name: "Achieve",
      marker: {
        symbol: "circle",
        radius: 4,
        lineColor: "white",
        lineWidth: 2,
      },
      data: [25, 30, 25, 35, 40, 38, 58, 52, 60, 50],
    },
  ],
});
