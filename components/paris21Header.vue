<template>
  <div class="paris21_header">
    <div class="header_wrapper">
      <nuxt-link to="/" class="header_logo"></nuxt-link>
      <div class="header_menu">
        <nuxt-link to="/country/" class="menu_link" :class="(page == 'country') ? 'selected' : ''">Countries</nuxt-link>
        <nuxt-link to="/indicator/" class="menu_link chipped" :class="(page == 'indicator') ? 'selected' : ''">Indicators</nuxt-link>
        <nuxt-link to="/report" class="menu_link chipped" :class="(page == 'report') ? 'selected' : ''">Flagship report</nuxt-link>
        <div class="menu_langblock" @click="langsBlockSelected = !langsBlockSelected" :data-selected="langsBlockSelected">
          <div class="langblock_head">EN</div>
          <div class="langblock_items" v-if="langsBlockSelected">
            <div class="langblock_item">FR</div>
            <div class="langblock_item">IT</div>
            <div class="langblock_item">ES</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    page: {
      default: function () {
        return 'home'
      }
    }
  },
  data: function () {
    return {
      langsBlockSelected: false
    }
  },
  mounted: function () {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.paris21_header{
  position: fixed;
  left:0px;
  width: 100%;
  top: 0px;
  height: 50px;
  background: #fff;
  z-index: 10;
  text-align: center;
  -webkit-box-shadow: 0 10px 60px 0 rgba(47,47,47,0.4);
  box-shadow: 0 10px 60px 0 rgba(47,47,47,0.4);

  .header_wrapper{
    width:100%;
    height: 100%;
    max-width: 1000px;
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .header_logo{
    position: absolute;
    left: 10px;
    top: 10px;
    background: url("/images/logos/header-shape.svg") no-repeat 0 0;
    width: 65px;
    height: 75px;
    &:after{
      position: absolute;
      left: 50%;
      @include transform(translate(-50%, 0));
      top: 0px;
      content:"";
      background: url("/images/logos/logo-paris21.svg") no-repeat 0 0;
      background-size: 100% 100%;
      width: 80px;
      height: 52px;
      margin-left: -8px;
    }
  }

  .header_menu{
    position: absolute;
    right:0px;
    top: 50%;
    @include transform(translate(0, -50%));
    height: 100%;
    line-height: 46px;
    .menu_link{
      display: inline-block;
      vertical-align: top;
      margin: 0 25px;
      color: #222;
      text-decoration: none;
      text-transform: uppercase;
      font-family: "roboto_condensedbold";
      font-size: 16px;
      position: relative;
      &:after{
        content: "";
        position: absolute;
        left: 50%;
        top: 41px;
        @include transform(translate(-50%, 0));
        width: 0%;
        height: 9px;
        background-color: $colorRed;
        @include transition((all), 0.3s, ease-in-out)
      }
      &.selected{
        color: $colorRed;
        &:after{
          width: 120%
        }
      }
      &.chipped{
        &:before{
          content:"";
          position: absolute;
          left: -25px;
          width: 4px;
          height: 4px;
          border-radius: 4px;
          background: $colorRed;
          top: 50%;
          @include transform(translate(-50%, -50%));
        }
      }
      &:hover{
        color: $colorRed;
        &:after{
          width: 120%;
        }
      }
    }
    .menu_langblock{
      background: $colorRed;
      font-family: "roboto_condensedbold";
      width: 50px;
      border-radius: 20px;
      color: #fff;
      display: inline-block;
      vertical-align: top;
      margin-right: 30px;
      margin-left: 40px;
      padding-left: 10px;
      position: relative;
      top: 10px;
      height: 24px;
      cursor: pointer;
      text-align: left;
      .langblock_head{
        display: block;
        float: left;
        vertical-align: top;
        height: 24px;
        line-height: 24px;
        position: relative;
        width: 100%;
        &:after{
          content:"";
          position: absolute;
          right: 6px;
          top: 50%;
          @include transform(translate(0px, -50%));
          background: url("/images/global/dropdown-langue_arrow.svg") no-repeat 0 0;
          background-size: 100% 100%;
          width: 10px;
          height: 5px;
        }
      }
      .langblock_items{
        padding: 0 0 5px;
        display: block;
        float: left;
        vertical-align: top;
        width: 100%;
        line-height: 24px;
        .langblock_item{
          color: $colorRed;
          width: 100%;
          float: left;
          height: 24px;
          line-height: 24px;
          display: inline-block;
          vertical-align: top;
          &:hover{
            color: #fff;
          }
        }
      }
      &[data-selected="true"]{
        background: #2F2F2F;
        height: auto;
        border-radius: 10px;
      }
    }
  }
}

</style>
