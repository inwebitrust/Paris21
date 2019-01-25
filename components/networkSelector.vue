<template>
  <div class="selector" data-selector="network" :data-state="state">

    <div class="selector_homecontent" v-if="(state == 'home') || (state == 'shrinked')" @click="expandSelector()">
      <div class="homecontent_picto"></div>
      <div class="homecontent_title">
        <span class="bolder">Find the data</span><br />
        at the appropriate level
      </div>
      <button class="homecontent_expandbt">EXPLORE</button>
    </div>

    <div class="selector_expandedcontent" v-if="(state == 'expanded')">
      <div class="expandedcontent_main">
        <div class="expandedcontent_title">
          Find the data at<br />
          the appropriate level
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  props: {
    state: {
      type: String,
      default: function () {
        return 'home'
      }
    }
  },
  data: function () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
    expandSelector: function () {
      this.$parent.selectorExpanded = 'network'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.expandedcontent_main{
  width: 30%;
}
</style>
