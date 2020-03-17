<template>
  <div id="Home" class="page" data-page="home">
    <paris21Header :page="'home'" @downloadModal="displayDownloadModal = true"></paris21Header>

    <div class="page_main">
      <div class="main_wrapper">
        <h1 class="main_title">
          Find and explore indicators <span class="bolder">on statistical capacity</span>
        </h1>

        <div class="main_blocks" :data-selector-expanded="selectorExpanded">
          <geographySelector :state="(selectorExpanded === '') ? 'home' : ((selectorExpanded == 'geography') ? 'expanded' : 'shrinked')" :hasTooltipValues="false"></geographySelector>
          <indicatorSelector :state="(selectorExpanded === '') ? 'home' : ((selectorExpanded == 'indicator') ? 'expanded' : 'shrinked')" @aboutIndicatorsModal="displayIndicatorsModal = true"></indicatorSelector>
          <networkSelector2 :state="(selectorExpanded === '') ? 'home' : ((selectorExpanded == 'network') ? 'expanded' : 'shrinked')"></networkSelector2>
        </div>   

        <div class="home_block" data-block="about">
          <div class="block_subtitle">About</div>
          <div class="block_title">Statistical Capacity Monitor</div>
          <nuxt-link to="/about" class="block_bt"></nuxt-link>
        </div>

        <div class="home_block" data-block="download">
          <div class="block_subtitle">Download</div>
          <div class="block_title">Dataset, coodebook and methodology</div>
          <a class="block_bt" @click="displayDownloadModal = true"></a>
        </div>

      </div>
    </div>

    <paris21Modal type="indicators" :displayed="displayIndicatorsModal" @closeModal="displayIndicatorsModal = false"></paris21Modal>

    <paris21Modal type="privacy" :displayed="displayPrivacyModal" @closeModal="displayPrivacyModal = false"></paris21Modal>

    <paris21Modal type="download" :displayed="displayDownloadModal" @closeModal="displayDownloadModal = false"></paris21Modal>

    <paris21Footer @privacyModal="displayPrivacyModal = true"></paris21Footer>
  </div>
</template>

<script>

import paris21Header from '~/components/paris21Header.vue'
import paris21Footer from '~/components/paris21Footer.vue'
import paris21Modal from '~/components/paris21Modal.vue'
import geographySelector from '~/components/geographySelector.vue'
import indicatorSelector from '~/components/indicatorSelector.vue'
import networkSelector2 from '~/components/networkSelector2.vue'

export default {
  components: {
    'paris21Header': paris21Header,
    'paris21Footer': paris21Footer,
    'geographySelector': geographySelector,
    'indicatorSelector': indicatorSelector,
    'networkSelector2': networkSelector2,
    'paris21Modal': paris21Modal
  },
  head () {
    return {
      title: 'Statistical Capacity Monito',
      meta: [
        { hid: 'description', name: 'description', content: 'Find and explore indicators on statistical capacity' },
        { hid: 'og:image', name: 'og:image', content: 'http://statisticalcapacitymonitor.org/images/share-img.png' }
      ]
    }
  },
  data: function () {
    return {
      selectorExpanded:'',
      displayIndicatorsModal: false,
      displayDownloadModal: false,
      displayPrivacyModal: false
    }
  },
  mounted: function () {

  },
  methods: {

  }
}

</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  @import "~assets/scss/_browsers.scss";

  .page_main{
    position: relative;
    .main_wrapper{
      position: relative;
      width: 100%;
    }
    .main_title{
      font-weight: 400;
      font-size: 22px;
      color: $textColor;
      margin: 30px 0;
    }
    .main_blocks{
      width: 100%;
      position: relative;
      height: 540px;
      margin-bottom: 10px;
      &[data-selector-expanded="geography"]{
        .selector[data-selector="indicator"]{
          left: 10px;
        }
      }
      &[data-selector-expanded="network"]{
        .selector[data-selector="indicator"]{
          left: 500px;
        }
      }
      &[data-selector-expanded="indicator"]{
      }
    }

    .home_block{
      width: 48%;
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&1+0,0+100 */
      background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
      display: inline-block;
      height: 159px;
      vertical-align: top;
      text-align: center;
      color: #2F2F2F;
      &[data-block="about"]{
        margin-right: 2%;
      }
      .block_subtitle{
        font-weight:300;
        font-size: 18px;
        margin-top: 20px;
      }

      .block_title{
        font-size: 18px;
        font-family: "montserratbold";
      }
      .block_bt{
        cursor: pointer;
        text-decoration: none;
        margin-top: 20px;
        display: inline-block;
        vertical-align: top;
        width: 150px;
        height: 40px;
        border-radius: 40px;
        background: #fff;
        line-height: 36px;
        font-size: 20px;
        color: #2F2F2F;
        border: 1px solid #2F2F2F;
        position: relative;
        cursor: pointer;
        &:after{
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          @include transform(translate(-50%, -50%));
          background:url("~/static/images/global/arrow-right.svg");
          background-size: 100% 100%;
          width: 20px;
          height: 20px;
        }
        &:hover{
          background:#2F2F2F !important;
          border-color: #2F2F2F !important;
          color: #fff !important;
          &:after{
            background:url("~/static/images/global/arrow-right-white.svg");
            background-size: 100% 100%;
          }
        }
      }
    }
  }

  #Home{
    .selector[data-state="expanded"][data-selector="indicator"], .selector[data-state="expanded"][data-selector="indicator"] .indicator_sidebar{
      min-height: 526px;

    }

    .page_main{
      position: relative;
      min-height: 920px;
      margin-bottom: 40px;
    }
  }
</style>
