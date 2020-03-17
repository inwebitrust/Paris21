<template>
  <div class="geovaluestable_cell" :data-type="dataType" :data-referring="isReferring">
    <!--<div style="position:absolute">{{indicatorData}}</div>-->
    <div class="cell_value">
      <div class="cell_value_nodata" v-if="hasNoData">-</div>

      <div class="cell_value_histo" v-if="!hasNoData && (dataType !== 'binary' || geoType != 'country') && (dataType !== 'ordinal' && geoType !== 'country')">
        <div class="histo_bar" :style="{height: computedBarHeight + '%'}" :data-value="dataValue">
          <div class="bar_value">
            <span class="bar_value_html" v-html="dataValue"></span>
            <span class="value_unit" v-if="(dataType == 'binary' && geoType != 'country')">&nbsp;%</span></div>
        </div>
      </div>

      <div class="cell_value_binary" v-if="!hasNoData && dataType == 'binary' && geoType == 'country'">
        <div class="binary_value" :data-binary="dataValue" v-if="geoType == 'country'">{{ dataValue }}</div>
      </div>

      <div class="cell_value_ordinal" v-if="!hasNoData && geoType != 'country' && (dataType == 'ordinal') && ordinalRegionArray != ''">
        <div class='ordinal_barchart' @mouseover="overOrdinalBarchart = true" @mouseleave="overOrdinalBarchart = false">
          <div class='barchart_subbar' :data-value="ordinalObj.value" v-for="(ordinalObj, index) in ordinalRegionArray" :style="{'height':(ordinalObj.nb/totalNB)*100+'%', 'background-color':ordinalColors[index]}">
          </div>
        </div>
        
        <div class="ordinal_tooltip" v-if="overOrdinalBarchart">
          <div class="tooltip_year">{{computedRefYear}}</div>
          <div class="tooltip_geo">{{geoLabel}}</div>
          <div class="tooltip_available" v-html="availableDataNoBR"></div>
          <div class="tooltip_item" v-for="(ordinalObj, index) in ordinalRegionArray" v-if="foundSpecificIndicator == undefined">
            {{ordinalObj.value}} <span class='item_value'>{{(ordinalObj.nb/totalNB)*100+'%'}}</span>
          </div>
          <div class="tooltip_item" v-for="(ordinalObj, index) in ordinalRegionArray" v-if="foundSpecificIndicator != undefined">
            <div class="item_wdata" v-if="specificLabelsObj[parseFloat(ordinalObj.value).toFixed(1)] !== undefined">
              {{specificLabelsObj[parseFloat(ordinalObj.value).toFixed(1)].label}} <span class='item_value'>{{ parseFloat((ordinalObj.nb/totalNB)*100).toFixed(0)+'%'}}</span>
              <span class='item_chip' :style="{'background-color':ordinalColors[index]}"></span>
            </div>
            <div class="item_nodata" v-if="specificLabelsObj[parseFloat(ordinalObj.value).toFixed(1)] === undefined">
                No data <span class='item_value'>{{ parseFloat((ordinalObj.nb/totalNB)*100).toFixed(0)+'%'}}</span>
                <span class='item_chip'></span>
            </div>
          </div>
        </div>
      </div>

      <div class="cell_value_ordinal_single" v-html="dataValue" v-if="!hasNoData && geoType == 'country' && (dataType == 'ordinal')"></div>

      <div class="cell_value_available" v-html="availableData" v-if="!hasNoData">
        
      </div>

    </div>
  </div>
</template>

<script>

import {_} from 'underscore'
var numberFormat = require('underscore.string/numberFormat')
import axios from 'axios'
import * as UTILS from '~/commons/utils/index.js'

export default {
  props: {
    indicatorData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    comparedCountries: {
      type: Array,
      default: function () {
        return {}
      }
    },
    indicatorID: {
      type: String, 
      default: function () {
        return ''
      }
    },
    dataType: {
      type: String,
      default: function () {
        return ''
      }
    },
    refYear: {
      type: String, 
      default: function () {
        return ''
      }
    },
    isReferring: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    geoType: {
      type: String,
      default: function () {
        return 'country'
      }
    },
    geoID: {
      type: String,
      default: function () {
        return ''
      }
    },
    geoLabel: {
      type: String,
      default: function () {
        return ''
      }
    },
    geoGroups: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  
  data: function () {
    return {
      defaultMaxPctHeight:70,
      computedRefYear:null,
      availableData:'',
      availableDataNoBR: '',
      totalNB: 0,
      ordinalRegionArray:'',
      foundSpecificIndicator: '',
      specificLabelsObj: {},
      ordinalColors: ['#F7CC3D', '#EC9A3A', '#E87D00', '#EA6651', '#B45747'],
      overOrdinalBarchart: false
    }
  },
  
  mounted: function () {
    var self = this

    this.foundSpecificIndicator = _.find(UTILS.specificIndicators, function (indic) {
      return self.indicatorID == indic.id;
    })
    if(this.foundSpecificIndicator !== undefined) {
      _.each(this.foundSpecificIndicator.labels, function(indicLabel){
        self.specificLabelsObj[indicLabel.value] = indicLabel;
      })
    }

    if(this.refYear == null) {
      this.setRefYearToLastAvailable()
    } else {
      this.computedRefYear = this.refYear
    }
    this.getAvailableData()
  },

  methods: {
    setRefYearToLastAvailable: function () {
      if(this.indicatorData.years !== undefined) {
        this.computedRefYear = _.keys(this.indicatorData.years)[_.size(this.indicatorData.years)-1]
      }
    },

    getAvailableData: function () {
      var self = this
      if(this.geoType !== "country") {
        axios.get(process.env.CONFIG_APP.api_url + 'getAvailableData.php?indicatorID='+this.indicatorID+'&year='+this.computedRefYear+'&geoType='+this.geoType+'&geoID='+this.geoID)
        .then(response => {
          var totalNB = parseInt(response.data, 10);
          var pctValue = parseFloat(self.dataValue);
          var pctNB = Math.round(totalNB * (pctValue/100));
          self.totalNB = totalNB;

          if(self.indicatorData.years !== undefined && self.indicatorData.years[self.computedRefYear] !== undefined) {
            var dataValue = self.indicatorData.years[self.computedRefYear]
            if(dataValue != ''){
              if(dataValue.charAt(0) == '{'){
                dataValue = dataValue.replace('"."', '","')
                var ordinalRegionObj = JSON.parse(dataValue);
                self.ordinalRegionArray = [];

                _.each(self.specificLabelsObj, function (obj){
                  var foundRegionObj = _.find(ordinalRegionObj, function (regObj){
                    return parseFloat(regObj.value).toFixed(1) == obj.value;
                  })
                  if(foundRegionObj !== undefined) {
                    self.ordinalRegionArray.push(foundRegionObj);
                  } else {
                    self.ordinalRegionArray.push({"value":obj.value, "nb":0});
                  }
                });

                var totalWithValues = 0;
                _.each(self.ordinalRegionArray, function (regionObj){
                  totalWithValues += regionObj.nb;
                })
                pctNB = totalWithValues;
                self.ordinalRegionArray.push({"value":"nodata", "nb":self.totalNB-totalWithValues})
              }
            } else {
              self.ordinalRegionArray = 'no data'
            }
          }

          var foundGeoGroup = _.find(self.geoGroups, function (geoData){
            return geoData["1"] == self.geoID;
          });

          if(self.dataType == "bar graph") {
            self.availableData = totalNB + " countries<br />out of " + foundGeoGroup.count;
            self.availableDataNoBR = totalNB + " countries out of " + foundGeoGroup.count;
          } else {
            self.availableData = totalNB + " countries<br />out of " + foundGeoGroup.count;
            self.availableDataNoBR = totalNB + " countries out of " + foundGeoGroup.count;
          }
        })
      }
    }
  },

  computed: {
    dataValue: function () {
      var dataValue = 'no data'
      if(this.indicatorData !== undefined && this.indicatorData.years !== undefined) {
        dataValue = this.indicatorData.years[this.computedRefYear]
        if(dataValue !== 'Not Available'){
          if (this.dataType == 'binary' && this.geoType == 'country') {
            if (dataValue == '1') return 'yes'
            else return 'no'
          } else if(this.dataType == 'ordinal' && this.geoType != 'country') {
            //waiting for available data
            
          } else {
            if(dataValue !== '') {
              dataValue = parseFloat(dataValue)

              if(this.dataType == 'ordinal' && this.geoType == 'country') {
                dataValue = dataValue.toFixed(1)

                var incFound = 0;
                _.each(this.foundSpecificIndicator.labels, function (labelData, index){
                  if(labelData.value == dataValue) incFound = index;
                });

                var backgroundColor = this.ordinalColors[0]
                if(this.ordinalColors[incFound] !== undefined) backgroundColor = this.ordinalColors[incFound]

                dataValue = '<span class="ordinalsingle_circle" style="background:'+backgroundColor+';"></span><br /><span class="ordinalsingle_label">'+this.specificLabelsObj[dataValue].label+'</span>'
              } else {
                if (this.dataType == 'binary' && this.geoType != 'country') {
                  dataValue = (dataValue * 100)
                }
                
                if(dataValue <= 1) dataValue = numberFormat(dataValue, 1, '.', '&nbsp;')
                else if(dataValue > 100) dataValue = numberFormat(dataValue, 0, '.', '&nbsp;')
                else dataValue = numberFormat(dataValue, 1, '.', '&nbsp;')
              }
              
            } else {
              dataValue = 'no data'
            }
            
          }
        } else {
          dataValue = 'Not Available'
        }
      }
      return dataValue
    },

    hasNoData: function () {
      var hasNoData = true
      if(this.indicatorData !== undefined && this.indicatorData.years !== undefined) {
        hasNoData = false
        if(this.indicatorData.years[this.computedRefYear] === undefined){
          hasNoData = true
        } else {
          if (this.indicatorData.years[this.computedRefYear] == 'Not Available') hasNoData = true
          if (this.dataType !== 'binary' && this.indicatorData.years[this.computedRefYear] == '') hasNoData = true
        }
      } else {

      }
      return hasNoData
    },

    computedBarHeight: function () {
      var self = this

      var indicatorValue = 0

      if(this.indicatorData !== undefined && this.indicatorData.years !== undefined && this.indicatorData.years[this.computedRefYear]) {
          indicatorValue = parseFloat(this.indicatorData.years[this.computedRefYear])
      }

      //console.log('computedBarHeight', 'indicatorValue', indicatorValue)

      var maxVal = indicatorValue
      _.each(this.comparedCountries, function (co){
        if(self.$store.DBGeoItems[co] !== undefined && self.$store.DBGeoItems[co].indicators !== undefined && self.$store.DBGeoItems[co].indicators[self.indicatorID] !== undefined && self.$store.DBGeoItems[co].indicators[self.indicatorID].years[self.computedRefYear] !== undefined) {
          var comparedValue = parseFloat(self.$store.DBGeoItems[co].indicators[self.indicatorID].years[self.computedRefYear])
          if(comparedValue > maxVal) {
            maxVal = comparedValue
          }
        }
      })

      var computedHeight = (indicatorValue*this.defaultMaxPctHeight) / maxVal
      return computedHeight
    }
  },

  watch: {
    refYear: function () {
      if(this.refYear == null) {
        this.setRefYearToLastAvailable()
      } else {
        this.computedRefYear = this.refYear
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.geovaluestable_cell{
  height: 100%;
  position: relative;
  .cell_value{
    height: 100%;
    position: relative;
  }
  .cell_value_available{
    position: absolute;
    left: 50%;
    @include transform(translate(-50%, 0));
    top: 100%;
    width: 110%;
    color: #333;
    line-height: 14px;
    font-size: 11px;
  }
  .cell_value_nodata{
    color: #8C8C8C;
    font-size: 15px;
    font-family: 'montserratbold';
    position: relative;
    width: 80px;
    height: 20px;
    line-height: 20px;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    @include transform(translate(-50%, -50%));
    /*
    &:before{
      content:"";
      position: absolute;
      left: 50%;
      bottom: 20px;
      height: 2px;
      width: 24px;
      background: #8C8C8C;
      @include transform(translate(-50%, 0));
    }
    &:after{
      content:"";
      position: absolute;
      left: 50%;
      top: 22px;
      height: 2px;
      width: 24px;
      background: #8C8C8C;
      @include transform(translate(-50%, 0));
    }
    */
  }

  .cell_value_histo{
    text-align: center;
    height: 100%;
    display: inline-block;
    vertical-align: bottom;
    position: relative;
    .histo_bar{
      width: 20px;
      height: 20px;
      display: inline-block;
      vertical-align: bottom;
      background: $colorGreen;
      position: absolute;
      left: 50%;
      bottom: 0px;
      @include transform(translate(-50%, 0));
      .bar_value{
        font-size: 15px;
        height: 20px;
        line-height: 20px;
        font-family: "montserratbold";
        color: $colorGreen;
        position: absolute;
        left: 50%;
        @include transform(translate(-50%, 0));
        bottom: 100%;
        margin-bottom: 2px;
        white-space: nowrap;
      }
    }
  }

  .cell_value_binary{
    .binary_value{
      position: absolute;
      left: 50%;
      top: 50%;
      @include transform(translate(-50%, -50%));
      font-family: "montserratbold";
      font-size: 15px;
      height: 18px;
      line-height: 18px;
      &:before{
        content: "";
        position: absolute;
        right: 100%;
        top: 0px;
        margin-right: 4px;
        width: 18px;
        height: 22px;
      }
      &[data-binary="yes"]{
        color: $colorGreen;
        &:before{
          background: url("~/static/images/global/tick-data.svg") no-repeat 0 0;
          background-size: 100% 100%;
        }
      }
      &[data-binary="no"]{
        color: $colorOrange;
        &:before{
          background: url("~/static/images/global/tick-nodata.svg") no-repeat 0 0;
          background-size: 100% 100%;
        }
      }
    }
  }

  .cell_value_ordinal{
    text-align: center;
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 1000;
    .ordinal_barchart{
      width: 20px;
      height: 100%;
      cursor: pointer;
      display: inline-block;
      position: absolute;
      left: 50%;
      @include transform(translate(-50%, 0));
      bottom: 0px;
      .barchart_subbar{
        width: 100%;
        &[data-value="nodata"]{
          background: #8C8C8C !important;
        }
      }
    }
    .ordinal_tooltip{
      position: absolute;
      left: 100%;
      top: 50%;
      box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.4);
      @include transform(translate(0%, -50%));
      padding: 10px;
      text-align: left;
      background: #fff;
      color: #2F2F2F;
      line-height: 20px;
      min-width: 200px;
      box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.4);
      .tooltip_year{
        font-family: 'montserratitalic';
        font-size: 12px;
      }
      .tooltip_geo{
        font-family: 'montserratbold';
        font-size: 12px;
      }
      .tooltip_available{
        font-family: 'montserratbold';
        color: #8C8C8C;
        font-size: 10px;
      }
      .tooltip_item{
        display: block;
        font-size: 12px;
        position: relative;
        padding-left: 20px;
        .item_chip{
          width: 14px;
          height: 14px;
          border-radius: 14px;
          display: inline-block;
          position: absolute;
          left: 0px;
          top: 50%;
          background: #8C8C8C;
          @include transform(translate(0, -50%));
        }
        .item_wdata:first-letter{
          text-transform: capitalize;
        }
        .item_value{
          font-family: 'montserratbold';
        }
      }
    }
  }

  .cell_value_ordinal_single{
    line-height: 20px;
    padding-top: 30px;
    .ordinalsingle_circle{
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background: #ccc;
    }
    .ordinalsingle_label{
      color:#2F2F2F;
      font-family: "montserratbold";
      font-size: 14px;
    }
  }

  &[data-referring="true"]{
    .cell_value_histo{
      .histo_bar{
        background: $colorDarkGreen;
        .bar_value{
          color: $colorDarkGreen;
        }
      }
    } 
  }
}


</style>
