<template>
  <div id="Home" class="page" data-page="home">
    <paris21Header></paris21Header>

    <div class="page_main">
      <h1 class="main_title">Lorem ipsum baseline <span class="bolder">about data portal</span></h1>

      <div class="main_blocks" :data-selector-expanded="selectorExpanded">
        <geographySelector :state="(selectorExpanded === '') ? 'home' : ((selectorExpanded == 'geography') ? 'expanded' : 'shrinked')"></geographySelector>
        <indicatorSelector :state="(selectorExpanded === '') ? 'home' : ((selectorExpanded == 'indicator') ? 'expanded' : 'shrinked')"></indicatorSelector>
        <networkSelector :state="(selectorExpanded === '') ? 'home' : ((selectorExpanded == 'network') ? 'expanded' : 'shrinked')"></networkSelector>
      </div>
    </div>

    <paris21Footer></paris21Footer>
  </div>
</template>

<script>

import paris21Header from '~/components/paris21Header.vue'
import paris21Footer from '~/components/paris21Footer.vue'
import geographySelector from '~/components/geographySelector.vue'
import indicatorSelector from '~/components/indicatorSelector.vue'
import networkSelector from '~/components/networkSelector.vue'
import { noteToFrequency } from 'music-fns';

export default {
  components: {
    'paris21Header': paris21Header,
    'paris21Footer': paris21Footer,
    'geographySelector': geographySelector,
    'indicatorSelector': indicatorSelector,
    'networkSelector': networkSelector
  },
  data: function () {
    return {
      selectorExpanded:''
    }
  },
  mounted: function () {
    console.log(noteToFrequency('A4'));
  },
  methods: {

  }
}

</script>

<style lang="scss">
  @import "~assets/scss/_variables.scss";
  @import "~assets/scss/_browsers.scss";

  .page_main{
    .main_title{
      font-weight: 400;
      font-size: 22px;
      color: $textColor;
      margin: 30px 0;
    }
    .main_blocks{
      width: 100%;
      min-height: 1000px;
      position: relative;
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
    }
  }
</style>
