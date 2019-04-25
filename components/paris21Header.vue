<template>
  <div class="paris21_header">
    <div class="header_wrapper">
      <a class="header_logo" @click="clickLogo()" v-if="page == 'home'">
        <span class="logo_text">Statistical Capacity Monitor</span>
      </a>
      <nuxt-link to="/" v-if="page != 'home'" class="header_logo">
        <span class="logo_text">Statistical<br />Capacity Monitor</span>
      </nuxt-link>
      <div class="header_menu">
        <div class="menu_desktop">
          <nuxt-link to="/country/" class="menu_link" :class="(page == 'country') ? 'selected' : ''">Countries</nuxt-link>
          <nuxt-link to="/indicator/" class="menu_link chipped" :class="(page == 'indicator') ? 'selected' : ''">Indicators</nuxt-link>
          <nuxt-link to="/report" class="menu_link chipped" :class="(page == 'report') ? 'selected' : ''">Outlook</nuxt-link>
        </div>
        <div class="menu_mobile">
          <div class="menu_link" @click="mobileMenuActivated = !mobileMenuActivated">Menu</div>
          <div class="mobile_submenu" :class="(mobileMenuActivated) ? 'displayed' : ''">
            <nuxt-link to="/country/" class="menu_link" :class="(page == 'country') ? 'selected' : ''">Countries</nuxt-link>
            <nuxt-link to="/indicator/" class="menu_link chipped" :class="(page == 'indicator') ? 'selected' : ''">Indicators</nuxt-link>
            <nuxt-link to="/report" class="menu_link chipped" :class="(page == 'report') ? 'selected' : ''">Outlook</nuxt-link>
          </div>
        </div>
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
      langsBlockSelected: false,
      mobileMenuActivated: false
    }
  },
  mounted: function () {
  },
  methods: {
    clickLogo: function () {
      if(this.page == 'home') location.reload()
    }
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
  z-index: 10000;
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

  .menu_desktop{
    display: inline-block;
  }

  .header_logo{
    position: absolute;
    left: 10px;
    top: 10px;
    background: url("~static~/static/images/logos/header-shape.svg") no-repeat 0 0;
    width: 65px;
    height: 75px;
    cursor: pointer;
    &:after{
      position: absolute;
      left: 50%;
      @include transform(translate(-50%, 0));
      top: 0px;
      content:"";
      background: url("~static~/static/images/logos/logo-paris21.svg") no-repeat 0 0;
      background-size: 100% 100%;
      width: 80px;
      height: 52px;
      margin-left: -8px;
    }
    .logo_text{
      font-family: "montserratitalic";
      font-size: 13px;
      color: #81b1b1;
      line-height: 14px;
      position: absolute;
      top: 12px;
      @include transform(translate(0, -50%));
      left: 80px;
      text-align: left;
      width: 140px;
    }
  }

  .header_menu{
    position: absolute;
    right:0px;
    top: 50%;
    @include transform(translate(0, -50%));
    height: 100%;
    line-height: 46px;
    .menu_mobile{
      display: none;
      position: relative;
      .mobile_submenu{
        position: fixed;
        right: 0px;
        top: 50px;
        background: #2f2f2f;
        height: 100vh;
        text-align: left;
        display: none;
        width: 148px;
        &.displayed{
          display: block;
        }
        .menu_link{
          color: #fff;
          margin: 0 14px;
          font-size: 12px;
          &:before, &:after{
            display: none;
          }
        }
      }
    }
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
      display: none;
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
          right: 9px;
          top: 50%;
          @include transform(translate(0px, -50%));
          background: url("~static~/static/images/global/dropdown-langue_arrow.svg") no-repeat 0 0;
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
