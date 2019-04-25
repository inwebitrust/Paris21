<template>
  <div id="Home" class="page" data-page="home">
    <paris21Header :page="'home'"></paris21Header>

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
      </div>
    </div>

    <paris21Modal type="indicators" :displayed="displayIndicatorsModal" @closeModal="displayIndicatorsModal = false"></paris21Modal>

    <paris21Modal type="about" :displayed="displayAboutModal" @closeModal="displayAboutModal = false"></paris21Modal>

    <paris21Footer @aboutModal="displayAboutModal = true"></paris21Footer>
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
      displayAboutModal: false
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
      height: 570px;
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
