var Highcharts = require('highcharts');
var $ = require('jquery');
var _ = require('lodash');
const API_KEY = '9487d48ee7b7cdc42287b3e8879caa57'

const DATA_OBJ = [
    {
      "success":true,
      "terms":"https:\/\/currencylayer.com\/terms",
      "privacy":"https:\/\/currencylayer.com\/privacy",
      "historical":true,
      "date":"2017-03-22",
      "timestamp":1490227199,
      "source":"USD",
      "quotes":{
        "USDBRL":3.085803,
        "USDARS":15.619022,
        "USDEUR":0.926403
      }
    },
    {
      "success":true,
      "terms":"https:\/\/currencylayer.com\/terms",
      "privacy":"https:\/\/currencylayer.com\/privacy",
      "historical":true,
      "date":"2017-03-23",
      "timestamp":1490313599,
      "source":"USD",
      "quotes":{
        "USDBRL":3.139496,
        "USDARS":15.579937,
        "USDEUR":0.927099
      }
    },
    {
      "success":true,
      "terms":"https:\/\/currencylayer.com\/terms",
      "privacy":"https:\/\/currencylayer.com\/privacy",
      "historical":true,
      "date":"2017-03-24",
      "timestamp":1490399999,
      "source":"USD",
      "quotes":{
        "USDBRL":3.107504,
        "USDARS":15.590402,
        "USDEUR":0.925804
      }
    },
    {
      "success":true,
      "terms":"https:\/\/currencylayer.com\/terms",
      "privacy":"https:\/\/currencylayer.com\/privacy",
      "historical":true,
      "date":"2017-03-25",
      "timestamp":1490486399,
      "source":"USD",
      "quotes":{
        "USDBRL":3.107504,
        "USDARS":15.590402,
        "USDEUR":0.925804
      }
    },
    {
      "success":true,
      "terms":"https:\/\/currencylayer.com\/terms",
      "privacy":"https:\/\/currencylayer.com\/privacy",
      "historical":true,
      "date":"2017-03-26",
      "timestamp":1490572799,
      "source":"USD",
      "quotes":{
        "USDBRL":3.107302,
        "USDARS":15.589026,
        "USDEUR":0.921597
      }
    },
    {
      "success":true,
      "terms":"https:\/\/currencylayer.com\/terms",
      "privacy":"https:\/\/currencylayer.com\/privacy",
      "historical":true,
      "date":"2017-03-27",
      "timestamp":1490659199,
      "source":"USD",
      "quotes":{
        "USDBRL":3.1259,
        "USDARS":15.564049,
        "USDEUR":0.920505
      }
    },
    {
      "success":true,
      "terms":"https:\/\/currencylayer.com\/terms",
      "privacy":"https:\/\/currencylayer.com\/privacy",
      "historical":true,
      "date":"2017-03-28",
      "timestamp":1490710268,
      "source":"USD",
      "quotes":{
        "USDBRL":3.128976,
        "USDARS":15.528986,
        "USDEUR":0.920701
      }
    }
];

const CURRENCY_KEYS = {
    'BRL': {name: 'Brazilian Reais', quote_name: "USDBRL"},
    'EUR': {name: 'Euros', quote_name: "USDEUR"},
    'ARS': {name: 'Pesos Argentinos', quote_name: "USDARS"}
};


function ChartView(){
    var self = this;
    self.setButtonActions();
    self.apiData = self.fetchAPIData();
    self.data = self.getData();
}

ChartView.prototype.getData = function(){
    var self = this;
    return _.mapValues(CURRENCY_KEYS, function(o){
        return {
            name: o.name,
            data: _.map(self.apiData, n => {
                return [ n.timestamp * 1000, n.quotes[o.quote_name] ]
            })
        }
    });
}

ChartView.prototype.setButtonActions = function(){
    var self = this;
    $('#chartContainer button').click(function(e){
        e.preventDefault();
        if (!!self.chart){
            self.chart.destroy();
        }
        var id = $(this).attr('id');
        self.plotChart(id)
    });
}

ChartView.prototype.fetchAPIData = function(){
    return DATA_OBJ;
};

ChartView.prototype.plotChart = function (currency_key){
    var self = this;
    var currency = self.data[currency_key];
    self.chart = Highcharts.chart(chart, {
        chart: {
        },
        title: {
            text: 'USD to ' + currency.name + ' exchange rate over time'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to ' + currency.name,
            data: currency.data
        }]
    });
}

chartView = new ChartView();
chartView.plotChart("BRL");
