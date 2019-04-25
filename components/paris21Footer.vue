<template>
  <div class="paris21_footer">

    <div class="footer_content">

      <a class="footer_item" data-item="website" href="https://paris21.org/" target="_blank">
        <span class="item_label">Paris21 Website</span>
      </a>

      <a class="footer_item" data-item="contactus" href="https://paris21.org/about-paris-21/contact" target="_blank">
        <span class="item_label">Contact Us</span>
      </a>

      <a class="footer_item" data-item="about" @click="emitAboutModal()">
        <span class="item_label">About</span>
      </a>

      <div class="footer_item" data-item="findus">
        <span class="item_label" style="margin-right:4px;">Find us on</span>
        <div class="sharebt_wrapper">
          <a class="item_sharebt" href="https://twitter.com/ContactPARIS21" target="_blank" data-item="twitter"></a>
          <!--<a class="item_sharebt" data-item="facebook"></a>-->
          <a class="item_sharebt" href="https://vimeo.com/paris21secretariat" target="_blank" data-item="vimeo"></a>
          <a class="item_sharebt" href="https://www.youtube.com/user/PARIS21OECD" target="_blank" data-item="youtube"></a>
          <a class="item_sharebt" href="https://soundcloud.com/paris21-datatalk/" target="_blank" data-item="soundcloud"></a>
        </div>
      </div>

      <!--
      <a class="footer_item" data-item="download_all">
        <span class="item_label">Download all data .xls</span>
      </a>
      -->

    </div>
    
    <a class="footer_logo" target="_blank" href="http://wedodata.fr"></a>
  </div>
</template>

<script>

export default {
  props: {
    
  },
  data: function () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
    emitAboutModal: function () {
        this.$emit('aboutModal')
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.paris21_footer{
  position: relative;
  left:0px;
  width: 100%;
  bottom: 0px;
  height: 70px;
  background: #fff;
  z-index: 10;
  text-align: center;
  &.fixed{
    position: fixed;
  }
  .footer_content{
    position: relative;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    top: 50%;
    margin-top: 5px;
    @include transform(translate(0, -50%));
    .footer_item{
      display: inline-block;
      vertical-align: top;
      margin: 0 20px;
      color: #3A3A3A;
      font-family: 'roboto_condensedbold';
      text-transform: uppercase;
      text-align: left;
      position: relative;
      cursor: pointer;
      &:hover{
        color: $colorRed;
      }
      .sharebt_wrapper{
        display: inline-block;
      }
      .item_label{
        display: inline-block;
        vertical-align: top;
        position: relative;
        &:before{
          content:"";
          position: absolute;
          right: 100%;
          top: 50%;
          margin-right: 6px;
          @include transform(translate(0, -50%));
          width: 4px;
          height: 4px;
          background: $colorRed;
          border-radius: 6px;
        }
      }
      &[data-item="findus"], &[data-item="download_all"]{
        color: #aaa;
        &:before{
          background-color: #aaa;
        }
      }

      .item_sharebt{
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background: $colorDarkRed;
        display: inline-block;
        vertical-align: top;
        margin: 0 3px;
        position: relative;
        top: -6px;
        &:after{
          content:"";
          position: absolute;
          top: 50%;
          left: 50%;
          @include transform(translate(-50%, -50%));
          width: 30px;
          height: 30px;
        }
        &[data-item="twitter"]{
          &:after{
            background: url("~/static/images/social/icon-twitter.svg") no-repeat 0 0;
          }
        }
        &[data-item="facebook"]{
          &:after{
            background: url("~/static/images/social/icon-facebook.svg") no-repeat 0 0;
          }
        }
        &[data-item="vimeo"]{
          &:after{
            background: url("~/static/images/social/icon-vimeo.svg") no-repeat 0 0;
          }
        }
        &[data-item="youtube"]{
          &:after{
            background: url("~/static/images/social/icon-youtube.svg") no-repeat 0 0;
          }
        }
        &[data-item="soundcloud"]{
          &:after{
            background: url("~/static/images/social/icon-soundcloud.svg") no-repeat 0 0;
          }
        }
        &:hover{
          background: #2F2F2F;
        }
      }
    }
  }

  .footer_logo{
    position: absolute;
    right: 40px;
    top: 50%;
    @include transform(translate(0, -50%));
    background: url("~/static/images/logos/logo-wedodata.svg") no-repeat 0 0;
    background-size: 100% 100%;
    width: 100px;
    height: 25px;
    cursor: pointer;
    &:hover{
      background: url("~/static/images/logos/logo-wedodata-black.svg") no-repeat 0 0;
      background-size: 100% 100%;
    }
  }
}

</style>
