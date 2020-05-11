<template>
  <div class="highcharts_barchart">
    <div class="highcharts_container" :id="chartID" ></div>
  </div>
</template>

<script>
import * as UTILS from '~/commons/utils/index.js'
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
    },
    indicatorID: {
      type: String,
      default: function () {
        return ''
      }
    },
    indicatorLastYear: {
      type: String,
      default: function () {
        return ''
      }
    },
    geoGroups:{
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      barchartHigcharts: '',
      chartColors:['#307ABF', '#036463', '#149E9D', '#19A5CC', '#585CA3', "#B55CA3", "#BD7E4D", "F5992B", "#D9AD48", "#EA6651"],
      availableDataForRegions: {},
      regionItems: []
    }
  },
  mounted () {
    var self = this
  },
  methods: {

    updateBarchart: function () {
      var self = this

      if(this.datavizType == 'binary' || this.datavizType == 'ordinal'){
        this.seriesParams.max = 100
        this.seriesParams.suffixY = '%'
      }

      var isShared = true

      var barchartSeriesData = []
      _.each(this.timeseriesData, function(geoData, index){
        var geoValue = _.values(geoData.data)[geoData.data.length - 1]
        if(geoValue === undefined) geoValue = 0.00001
        barchartSeriesData.push({
          name:geoData.name,
          y:geoValue,
          m49:geoData.m49,
          geoType:geoData.geoType,
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
                    fontSize: '12px',
                }
            }
        },
        yAxis: {
            min: 0,
            max: this.seriesParams.max,
            title: {
                text: ''
            },
            labels: {
              style: {
                color: this.seriesParams.axisColor,
                fontSize: "12px"
              },
              formatter:function(){
                return this.value.toFixed(1) + ' ' + self.seriesParams.suffixY
              }
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
            connectNulls:true,
            dataLabels: {
                enabled: true,
                color: '#2F2F2F',
                align: 'center',
                formatter: function () {
                  if(this.y == 0.00001) return 'no data'
                  else {
                    if(this.point.geoType == 'country'){
                      return this.y.toFixed(1) + ' ' + self.seriesParams.suffixY
                    }
                    else {
                      var outOfString = '';
                      var regionM49 = this.point.m49;
                      var foundGeoGroup = _.find(self.geoGroups, function (geoData){
                        return geoData["1"] == regionM49;
                      });

                      if(self.availableDataForRegions[regionM49] !== undefined && foundGeoGroup !== undefined) outOfString = self.availableDataForRegions[regionM49] + ' out of ' + foundGeoGroup.count;
                      return this.y.toFixed(1) + ' ' + self.seriesParams.suffixY + '<br /><span class="smaller">'+outOfString+'</span>'
                    }
                  }
                },
                y: 0, // 10 pixels down from the top,
                useHTML:true,
                style: {
                    fontSize: '13px',
                    fontFamily: 'montserratregular'
                }
            }
        }]

      });
    },

    getAvailableDataForRegion: function (inc) {
      var self = this;

      var geoItem = this.regionItems[inc];

      if(geoItem !== undefined) {
        axios.get(process.env.CONFIG_APP.api_url + 'getAvailableData.php?indicatorID='+self.indicatorID+'&year='+self.indicatorLastYear+'&geoType='+geoItem.geoType+'&geoID='+geoItem.m49)
          .then(response => {
            self.availableDataForRegions[geoItem.m49] = response.data
            self.getAvailableDataForRegion(inc+1)
        })
      } else {
        this.updateBarchart()
      }
    }
  },
  watch: {
    timeseriesData: function(obj){
      var self = this;
      this.regionItems = _.filter(this.timeseriesData, function (geoItem) {
        return geoItem.geoType !== "country"
      })

      if(this.regionItems.length > 0) {
        this.availableDataForRegions = {};
        this.getAvailableDataForRegion(0)
      } else {
        self.updateBarchart();
      }
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
  .highcharts-label{
    text-align: center;
  }
  .smaller{
    font-size: 10px;
  }
}

.highcharts-axis-labels{
  position: relative;
  text{
    font-family: "montserratbold";
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
