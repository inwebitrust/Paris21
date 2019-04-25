<template>
  <div class="geovaluestable_cell" :data-type="dataType" :data-referring="isReferring">
    <!--<div style="position:absolute">{{indicatorData}}</div>-->
    <div class="cell_value">
      <div class="cell_value_nodata" v-if="hasNoData">-</div>

      <div class="cell_value_histo" v-if="!hasNoData && (dataType !== 'binary' || geoType != 'country')">
        <div class="histo_bar" :style="{height: computedBarHeight + '%'}" :data-value="dataValue">
          <div class="bar_value">
            <span class="bar_value_html" v-html="dataValue"></span>
            <span class="value_unit" v-if="(dataType == 'binary' && geoType != 'country')">&nbsp;%</span></div>
        </div>
      </div>

      <div class="cell_value_binary" v-if="!hasNoData && dataType == 'binary' && geoType == 'country'">
        <div class="binary_value" :data-binary="dataValue" v-if="geoType == 'country'">{{ dataValue }}</div>
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
    }
  },
  
  data: function () {
    return {
      defaultMaxPctHeight:70,
      computedRefYear:null
    }
  },
  
  mounted: function () {
    if(this.refYear == null) {
      this.setRefYearToLastAvailable()
    } else {
      this.computedRefYear = this.refYear
    }
  },

  methods: {
    setRefYearToLastAvailable: function () {
      if(this.indicatorData.years !== undefined) {
        this.computedRefYear = _.keys(this.indicatorData.years)[_.size(this.indicatorData.years)-1]
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
          } else {
            dataValue = parseFloat(dataValue)
            if (this.dataType == 'binary' && this.geoType != 'country') {
              dataValue = (dataValue * 100)
            }
            
            if(dataValue <= 1) dataValue = numberFormat(dataValue, 1, '.', '&nbsp;')
            else if(dataValue > 100) dataValue = numberFormat(dataValue, 0, '.', '&nbsp;')
            else dataValue = numberFormat(dataValue, 1, '.', '&nbsp;')
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
      /*
      &:before{
        content: "";
        position: absolute;
        right: 100%;
        top: 0px;
        margin-right: 4px;
        width: 18px;
        height: 22px;
      }
      */
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
