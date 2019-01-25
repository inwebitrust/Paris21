<template>
  <div class="highcharts_barchart">
    <div class="highcharts_container" :id="chartID" ></div>
  </div>
</template>

<script>
import axios from 'axios'
import {_} from 'underscore'

export default {
  props: {
    chartID: {
      type: String,
      default: function () {
        return 'Barchart'
      }
    },
    timeseriesData: {
      type: Array,
      default: function () {
        return []
      }
    },
    timeseriesCategories: {
      type: Array,
      default: function () {
        return []
      }
    },
    datavizType: {
      type: String,
      default: function () {
        return ''
      }
    },
    seriesParams: {
      type: Object,
      default: function () {
        return {
          color: '#8C8C8C',
          axisColor: '#8C8C8C',
          min:undefined,
          max:undefined,
          suffixY:''
        }
      }
    }
  },
  data: function () {
    return {
      barchartHigcharts: '',
      chartColors:['#307ABF', '#036463', '#149E9D', '#19A5CC', '#585CA3']
    }
  },
  mounted () {
    var self = this
    this.generateChart()
  },
  methods: {
    generateChart: function () {
      var self = this
    },

    updateBarchart: function () {
      var self = this

      if(this.datavizType == 'binary' || this.datavizType == 'ordinal') this.seriesParams.max = 1
      var isShared = true

      var barchartSeriesData = []
      _.each(this.timeseriesData, function(geoData, index){
        var geoValue = _.values(geoData.data)[geoData.data.length - 1]
        barchartSeriesData.push({
          name:geoData.name,
          y:geoValue,
          color:self.chartColors[index]
        })
      })

      this.barchartHigcharts = new Highcharts.chart({
        chart: {
            type: 'column',
            renderTo: self.chartID, backgroundColor:'transparent'
        },
        title: {
            text: '',
            enabled: false
        },
        subtitle: {
            text: '',
            enabled: false
        },
        colors: this.chartColors,
        xAxis: {
            type: 'category',
            labels: {
                style: {
                    fontSize: '13px',
                    fontFamily: 'montserratregular'
                }
            }
        },
        yAxis: {
            min: 0,
            max: this.seriesParams.max,
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '',
            enabled: false
        },
        credits: {
          enabled: false
        },
        series: [{
            name: 'Population',
            data: barchartSeriesData,
            dataLabels: {
                enabled: true,
                color: '#2F2F2F',
                align: 'center',
                format: '{point.y:.1f}', // one decimal
                y: 0, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'montserratregular'
                }
            }
        }]

      });
    }
  },
  watch: {
    timeseriesData: function(obj){
      console.log('watch updateBarchart', obj)
      this.updateBarchart()
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.highcharts_barchart{
  margin-top: 20px;
  .highcharts_container{
    width: 90%;
    height: 350px;
    position: relative;
    left: 50%;
    @include transform(translate(-50%, 0));

    .highcharts-yaxis-grid{
      stroke-dasharray:3px;
    }
  }
}

.highcharts-axis-labels{
  position: relative;
  text{
    font-size: 10px !important;
    font-family: "SpaceGrotesk-Bold";
  }
}

.highcharts-tooltip{
  text-align: center;
  .tooltip_content{
    text-align: center;
    .tooltip_year{
      font-size: 12px;
      color: #2F2F2F;
      font-family: "montserratitalic";
    }
    .tooltip_geo{
      font-size: 12px;
      color: #2F2F2F;
      font-family: "montserratbold";
      background: transparent;
      margin: 2px 0;
      border-radius: 0;
      box-shadow: none;
      .geo_name{
        display: inline-block;
        vertical-align: top;
        background: transparent;
        border-radius: 0;
        box-shadow: none;
      }
      .geo_value{
        display: inline-block;
        vertical-align: top;
        background: transparent;
        border-radius: 0;
        box-shadow: none;
      }
    }
  }
}
</style>
