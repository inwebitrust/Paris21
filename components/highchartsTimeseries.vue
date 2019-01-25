<template>
  <div class="highcharts_timeseries">
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
        return 'Timeseries'
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
      timeseriesHigcharts: '',
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

    updateTimeseries: function () {
      var self = this

      var isShared = true

      if(this.datavizType == 'binary' || this.datavizType == 'ordinal') this.seriesParams.max = 1

      this.timeseriesHigcharts = new Highcharts.chart({
        chart: { renderTo: self.chartID, backgroundColor:'transparent', type: 'spline'},
        title: { text: '' },
        subtitle: { text: '', enabled: false },
        colors: this.chartColors,
        xAxis: {
          lineColor: this.seriesParams.axisColor,
          gridLineColor: this.seriesParams.axisColor,
          tickColor: this.seriesParams.axisColor,
          tickWidth: 0,
          categories: this.timeseriesCategories,
          labels: {
            style: {
              color: this.seriesParams.axisColor,
            }
          }
        },
        yAxis: {
          title: { enabled: false },
          lineColor: this.seriesParams.axisColor,
          gridLineColor: this.seriesParams.axisColor,
          tickColor: this.seriesParams.axisColor,
          min:this.seriesParams.min,
          max:this.seriesParams.max,
          labels: {
            style: {
              color: this.seriesParams.axisColor,
            },
            formatter:function(){
              if(this.isLast) return this.value + '' + self.seriesParams.suffixY
              else return this.value
            }
          }
        },
        tooltip: {
          useHTML: true,
          enabled: true,
          shared:isShared,
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderColor: 'transparent',
          padding: 0,
          style: {
            width: '200px'
          },
          formatter: function() {
            var tooltipHTML = '<div class="tooltip_content"><div class="tooltip_year">'+this.x+'</div>'
            _.each(this.points, function(p) {
              tooltipHTML += '<div class="tooltip_geo"><span class="geo_name" style="color:'+self.chartColors[p.colorIndex]+'">'+p.series.name+' :</span><span class="geo_value">'+p.y.toFixed(1)+'</span></div>'
            })
            tooltipHTML += '</div>'
            return tooltipHTML
          }
        },
        credits: { enabled: false },
        legend: { enabled: false },
        plotOptions: {
            series: {
              lineWidth: 3,
              connectNulls: true,
              label: {
                  connectorAllowed: false
              },
              marker: {
                enabled: false
              }
            }
        },
        series: this.timeseriesData

      });
    }
  },
  watch: {
    timeseriesData: function(obj){
      console.log('watch timeseriesData', obj)
      this.updateTimeseries()
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.highcharts_timeseries{
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
