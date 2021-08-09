import priceData from '../../assets/data/daily.json'
import moment from 'moment'

const options = {style: 'currency', currency: 'USD'};
const numberFormat = new Intl.NumberFormat('en-US', options);

const configPrice = {
      
    yAxis: [{
      offset: 20,

      labels: {
        formatter: function () {
          return numberFormat.format(this.value) 
        }
        ,
        x: -15,
        style: {
          "color": "#000", "position": "absolute"

        },
        align: 'left'
      },
    },
      
    ],
    tooltip: {
      shared: true,
      formatter: function () {
        return numberFormat.format(this.y, 0) +  '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
      }
    },
    plotOptions: {
      series: {
        showInNavigator: false,
        gapSize: 6,

      }
    },
    title: {
      text: 'MTN Stock'
    },
    chart: {
      height: 400,
    },

    credits: {
      enabled: false
    },

    legend: {
      enabled: true
    },
    xAxis: {
      type: 'date',
    },
    rangeSelector: {
      buttons: [{
        type: 'week',
        count: 7,
        text: 'week'
      }, {
        type: 'month',
        count: 1,
        text: '1m'
      }, {
        type: 'month',
        count: 3,
        text: '3m'
      }],
      selected: 4
    },
    series: [{
      name: 'Price',
      type: 'spline',

      data: priceData,
      tooltip: {
        valueDecimals: 2
      },

    }
    ]
  };

export default configPrice;