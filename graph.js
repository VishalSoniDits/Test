Highcharts.chart("container", {
  chart: {
    type: "column",
  },
  title: {
    text: "Employee",
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
    // crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Number Of Employees",
    },
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Total Employee",
      data: [80, 88, 92, 98, 99, 100, 110, 110, 113, 120],
    },
    {
      name: "Offer Realesed",
      data: [15, 10, 7, 3, 12, 15, 9, 5, 13, 15],
    },
    {
      name: "New Joined",
      data: [10, 5, 6, 2, 5, 12, 3, 3, 7, 14],
    },
    {
      name: "Exit",
      data: [2, 1, 0, 0, 4, 2, 3, 0, 0, 1],
    },
  ],
});
