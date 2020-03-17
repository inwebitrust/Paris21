<template>
  <div id="Flagship" class="page" data-page="flagship">
    <paris21Header :page="'report'"></paris21Header>

    <div class="page_main">
      <div class="main_wrapper">
        <div class="flagship_cover"></div>
        <!--<div class="flagship_disclaimer">Lorem ipsum about Paris21 report...</div>-->
        <a class="flagship_bt" href="/pdf/Statistical Capacity Development Outlook 2019.pdf" target="_blank">DOWNLOAD (.PDF)</a>
      </div>
    </div>

    <paris21Modal type="privacy" :displayed="displayPrivacyModal" @closeModal="displayPrivacyModal = false"></paris21Modal>
    <paris21Footer @privacyModal="displayPrivacyModal = true"></paris21Footer>
  </div>
</template>

<script>

import paris21Header from '~/components/paris21Header.vue'
import paris21Footer from '~/components/paris21Footer.vue'
import paris21Modal from '~/components/paris21Modal.vue'

export default {
  components: {
    'paris21Header': paris21Header,
    'paris21Footer': paris21Footer,
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

  #Flagship{
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ededed+0,dedede+100 */
background: rgb(237,237,237); /* Old browsers */
background: -moz-linear-gradient(top, rgba(237,237,237,1) 0%, rgba(222,222,222,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(237,237,237,1) 0%,rgba(222,222,222,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(237,237,237,1) 0%,rgba(222,222,222,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ededed', endColorstr='#dedede',GradientType=0 ); /* IE6-9 */
    .page_main{
      min-height: 400px;
      .main_wrapper{
        display: inline-block;
        vertical-align: top;
        width: 300px;
        margin: 60px 0;
      }
    }
    .flagship_cover{
      background: url("~/static/images/global/flagship_report-cover2@2x.png") no-repeat 0 0;
      background-size: 100% 100%;
      width: 300px;
      height: 429px;
      cursor: pointer;
      display: inline-block;
      -webkit-box-shadow: 0 0 100px 0 rgba(140,140,140,1);
      box-shadow: 0 0 100px 0 rgba(140,140,140,1);
    }

    .flagship_disclaimer{
      color: $textColor;
      margin: 14px 0;
    }

    .flagship_bt{
      background: $colorRed;
      text-transform: uppercase;
      color: #fff;
      border-radius: 20px;
      display: inline-block;
      padding: 10px 20px;
      cursor: pointer;
      font-family: "roboto_condensedbold";
      text-decoration: none;
      margin-top: 14px;
      &:hover{
        background: $textColor;
      }
    }
  }
</style>
