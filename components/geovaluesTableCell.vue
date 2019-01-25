<template>
  <div class="geovaluestable_cell" :data-type="dataType">
    <!--<div style="position:absolute">{{indicatorData}}</div>-->
    <div class="cell_value">
      <div class="cell_value_nodata" v-if="hasNoData">no data</div>

      <div class="cell_value_histo" v-if="!hasNoData && dataType !== 'binary'">
        <div class="histo_bar" :style="{height: computedBarHeight + '%'}" :data-value="dataValue">
          <div class="bar_value">{{ dataValue }}</div>
        </div>
      </div>

      <div class="cell_value_binary" v-if="!hasNoData && dataType == 'binary'">
        <div class="binary_value" :data-binary="dataValue">{{ dataValue }}</div>
      </div>

    </div>
  </div>
</template>

<script>

import {_} from 'underscore'
var numberFormat = require('underscore.string/numberFormat')

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
    }
  },
  
  data: function () {
    return {
      defaultMaxPctHeight:70
    }
  },
  
  mounted: function () {
  },

  methods: {
    
  },

  computed: {
    dataValue: function () {
      var dataValue = 'no data'
      if(this.indicatorData !== undefined && this.indicatorData.years !== undefined) {
          dataValue = this.indicatorData.years[this.refYear]

          if(dataValue !== 'Not Available'){
            dataValue = parseFloat(dataValue)
            if(dataValue <= 1) dataValue = numberFormat(dataValue, 2, '.', ' ')
            else if(dataValue > 100) dataValue = numberFormat(dataValue, 0, '.', ' ')
            else dataValue = numberFormat(dataValue, 1, '.', ' ')
          } else {
            dataValue = 'Not Available'
          }
      }

      if (this.dataType == 'binary') {
        if (dataValue == '1') return 'yes'
        else return 'no'
      } else {
        return dataValue
      }
    },

    hasNoData: function () {
      var hasNoData = true
      if(this.indicatorData !== undefined && this.indicatorData.years !== undefined) {
        hasNoData = false
        if(this.indicatorData.years[this.refYear] === undefined){
          hasNoData = true
        } else {
          if (this.indicatorData.years[this.refYear] == 'Not Available') hasNoData = true
        }
      } else {

      }
      return hasNoData
    },

    computedBarHeight: function () {
      var self = this

      var indicatorValue = 0

      if(this.indicatorData !== undefined && this.indicatorData.years !== undefined && this.indicatorData.years[this.refYear]) {
          indicatorValue = parseFloat(this.indicatorData.years[this.refYear])
      }

      //console.log('computedBarHeight', 'indicatorValue', indicatorValue)

      var maxVal = indicatorValue
      _.each(this.comparedCountries, function (co){
        if(self.$store.DBGeoItems[co] !== undefined && self.$store.DBGeoItems[co].indicators !== undefined && self.$store.DBGeoItems[co].indicators[self.indicatorID] !== undefined && self.$store.DBGeoItems[co].indicators[self.indicatorID].years[self.refYear] !== undefined) {
          var comparedValue = parseFloat(self.$store.DBGeoItems[co].indicators[self.indicatorID].years[self.refYear])
          if(comparedValue > maxVal) {
            maxVal = comparedValue
          }
        }
      })

      var computedHeight = (indicatorValue*this.defaultMaxPctHeight) / maxVal
      return computedHeight
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.geovaluestable_cell{
  height: 100%;
  position: relative;
  .cell_value{
    height: 100%;
    position: relative;
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
      background: $colorDarkGreen;
      position: absolute;
      left: 50%;
      bottom: 0px;
      @include transform(translate(-50%, 0));
      .bar_value{
        font-size: 15px;
        height: 20px;
        line-height: 20px;
        font-family: "montserratbold";
        color: $colorDarkGreen;
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
      left: 60%;
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
          background: url("/images/global/tick-data.svg") no-repeat 0 0;
          background-size: 100% 100%;
        }
      }
      &[data-binary="no"]{
        color: $colorOrange;
        &:before{
          background: url("/images/global/tick-nodata.svg") no-repeat 0 0;
          background-size: 100% 100%;
        }
      }
    }
  }

}


</style>
