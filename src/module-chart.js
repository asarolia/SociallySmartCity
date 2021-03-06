import Chart from 'chart.js';
const dataArray = [100, 350, 300, 200, 300, 500]
const dataArray2 = [10, 3, 7, 18, 10, 8]

//-------------
//- BAR CHART -
//-------------
var areaChartData = {
  labels  : ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'March'],
  datasets: [
    {
      label               : 'Metro',
      backgroundColor     : '#f56954',
      data                : [40, 45, 49, 45, 42, 42]
    },
    {
      label               : 'Bus',
      backgroundColor     : '#00a65a',
      data                : [25, 28, 30, 29, 28, 27]
    },
    {
      label               : 'Others',
      backgroundColor     : '#00c0ef',
      data                : [35, 27, 20, 26, 30, 31]
    }
  ]
}
var barChartOptions = {
  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero        : true,
  //Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines      : true,
  //String - Colour of the grid lines
  scaleGridLineColor      : 'rgba(0,0,0,.05)',
  //Number - Width of the grid lines
  scaleGridLineWidth      : 1,
  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,
  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines  : true,
  //Boolean - If there is a stroke on each bar
  barShowStroke           : true,
  //Number - Pixel width of the bar stroke
  barStrokeWidth          : 2,
  //Number - Spacing between each of the X value sets
  barValueSpacing         : 5,
  //Number - Spacing between data sets within X values
  barDatasetSpacing       : 1,
  //String - A legend template
  responsive              : true,
  maintainAspectRatio     : true,
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 15,
      defaultFontColor: '#343a40',
      defaultFontSize: 11,
    }
  }
}

var chartBar = document.getElementById("chartBar");
new Chart(chartBar, {
  type: 'bar',
  data: areaChartData,
  options: barChartOptions
});

/* Chart Line */
var chartLine = document.getElementById("chartLine");
new Chart(chartLine, {
    type: 'line',
    data: {
        labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "March"],
        datasets: [{
            label: 'AQI',
            data: dataArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            pointBackgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            pointBorderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


// chart line two


/* Chart Line */
var chartScatter = document.getElementById("chartScatter");
new Chart(chartScatter, {
    type: 'line',
    data: {
        labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "March"],
        datasets: [{
            label: 'Power Disruption Count',
            data: dataArray2,
            backgroundColor: [
                'rgba(0, 209, 178, 0.2)'
            ],
            borderColor: [
                'rgba(0, 209, 178, 0.78)'
            ],
            pointBackgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            pointBorderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

/* Chart Scatter */
// var chartScatter = document.getElementById("chartScatter");
// new Chart(chartScatter, {
//     type: 'line',
//     data: {
//         datasets: [{
//             label: 'Scatter Dataset',
//             data: [{
//                 x: 5,
//                 y: "jan"
//             }, {
//                 x: 6,
//                 y: 8
//             }, {
//                 x: 6,
//                 y: 6
//             }, {
//                 x: 7,
//                 y: 7
//             }, {
//                 x: 7,
//                 y: 9
//             }, {
//                 x: 9,
//                 y: 5
//             }],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             pointBackgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             pointBorderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ]
//         }]
//     },
//     options: {
//         scales: {
//             xAxes: [{
//                 type: 'linear',
//                 position: 'bottom'
//             }]
//         }
//     }
// });


//-------------
//- Doughtnut CHART -
//-------------
var pieOptions = {
  responsive: true,
  segmentShowStroke: true,
  segmentStrokeColor: '#fff',
  segmentStrokeWidth: 1,
  animationSteps: 100,
  animationEasing: 'easeOutBounce',
  animateRotate: true,
  animateScale: true,
  maintainAspectRatio: true,
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 15,
      defaultFontColor: '#343a40',
      defaultFontSize: 11,
    }
  }
}

var chartDoughnut = document.getElementById("chartDoughnut");
new Chart(chartDoughnut, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [700, 500, 400, 600, 300],
      backgroundColor: [
        '#f56954',
        '#00a65a',
        '#f39c12',
        '#00c0ef',
        '#3c8dbc',
        '#d2d6de'
      ],
    }],
    labels: [
      '#CarTheft',
      '#Robbery',
      '#Murder',
      '#Fraud',
      '#Fights',
    ]
  },
  options: pieOptions
});



// WEBPACK FOOTER //
// ./module-chart.js