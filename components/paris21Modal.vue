<template>
  <div class="paris21_modalwrapper" :class="(displayed) ? 'displayed' : ''">

    <div class="paris21_modalbg" @click="closeModal()"></div>
    <div class="paris21_modal" v-if="type == 'indicators'">
      <div class="modal_title">
        Brief note on the <span class="bolder">classification of indicators</span>
        <a class="modal_closebt" @click="closeModal()"></a>
      </div>
      <div class="modal_content">
        <p class="bolder" style="margin-top: 10px;">
          In order to present these indicators in a user-friendly format for exploration and analysis, it was necessary to group them with an intuitive and straightforward taxonomy.
        </p>
        <p>
          We proceeded from several existing ideas in the statistical literature. The Generic Activity Model for Statistical Organizations (<a href="https://statswiki.unece.org/display/GAMSO" target="_blank">GAMSO</a>) provides a framework to conceptualise processes and activities in official statistical production and management—from strategy/leadership to capability development to corporate support to overall production.  Within the latter production theme is another international standard, the Generic Statistical Business Process Model (<a href="https://statswiki.unece.org/display/GSBPM" target="_blank">GSBPM</a>), which highlights the business processes of statistical production—from needs assessment/planning to data collection/cleaning to dissemination and evaluation. Both of these master tools succinctly summarize statistical production processes, but they do not always map onto the outcome indicators by which we are monitoring statistical capacity. We moved to a third option.
        </p>
        <p>
          Considering the breadth, depth, and relation of the indicators in the Statistical Capacity Monitor, we arrived at the following five families by which to classify the indicators:
          <ul>
            <li>
              <b>Planning:</b> the process of making arrangements for statistical production
            </li>
            <li>
              <b>Production:</b> the process of constructing statistics
            </li>
            <li>
              <b>Dissemination:</b> the action of spreading statistical information widely
            </li>
            <li>
              <b>Use:</b> statistical literacy, use and esteem of statistics
            </li>
            <li>
              <b>Investment:</b> devotion of resources to the statistical system
            </li>
          </ul>
        </p>
        <p>
          This taxonomy is similar to what is known in statistical circles as the Statistics Value Cycle, or the <a href="https://www.oecd-ilibrary.org/sites/dcr-2017-en/1/2/2/index.html?itemId=/content/publication/dcr-2017-en&_csp_=fbe5c4b8752a4197425bcc9e4401a633&itemIGO=oecd&itemContentType=book#ID56f1e126-b7a1-4716-9c39-7b10e9ec9293" target="_blank">virtuous data cycle</a>. (OECD Development Co-operation Report 2017: Data for Development) 
        </p>
        <div class="content_image"></div>
        <p>
          In the 2017 OECD report, this conceptual framework highlights the virtuous cycle of statistical capacity development: an improvement in one aspect of the system complements its other parts. In our revised framework, we have made two revisions: (i) we have separated planning and production into two distinct categories; and (ii) we have combined literacy and use/value into one category: use. From the indicators we have gathered in this platform, it seems that while the former can be measured apart, the latter must often be measured together. As we monitor national statistical capacity, the idea of a virtuous cycle remains.
        </p>
      </div>
    </div>

    <div class="paris21_modal" v-if="type == 'about'">
      <div class="modal_title">
        About <span class="bolder">the Statistical Capacity Monitor</span>
        <a class="modal_closebt" @click="closeModal()"></a>
      </div>
      <div class="modal_content">
        <p style="margin-top: 10px;">
          The implementation of the 2030 Agenda has brought attention to the new skills and practices that national statistical systems (NSS) will need to develop to meet the unprecedented demand for data and statistics.  
        </p>
        <p>
          As a recognised priority for most actors in the development and data community, understanding the needs and progress in statistical capacity through more accessible information remains a pending task. 
        </p>
        <p>
          The PARIS21 Statistical Capacity Monitor features existing and innovative indicators on statistical capacity and capacity development to support countries, donors and service providers to tailor capacity development programmes in statistics.
        </p>  
        <p>
          The Monitor provides access to an extensive, and evolving, battery of indicators on statistical capacity that will offer a clearer landscape of where countries stand in different areas of capacity. It facilitates country and regional comparisons across multiple dimensions of statistical capacity, presenting trends in key drivers (including funding and legislation) and periodically proposing new indicators that can inform our understanding of capacity.
        </p>
        <p>
          The Monitor aims to contribute to better match the supply and demand of programmes, enhance donors’ coordination in the provision of capacity development and build on our collective knowledge of what capacity means. The platform will support the PARIS21 <span class="bolder">Statistical Capacity Development Outlook</span> (forthcoming).
        </p>
        <p>
          <span class="bolder" style="color:#4ba4a1">The PARIS21 team</span>
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  props: {
    displayed:{
      type:Boolean,
      default: function(){
        return false
      },
    },
    type: {
      type: String,
      default: function () {
        return 'about'
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
    closeModal: function() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/_variables.scss";
@import "~assets/scss/_browsers.scss";

.paris21_modalwrapper{
  position: fixed;
  left:0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  display: none;
  z-index: 1000000;
  &.displayed{
    display: block;
  }
  .paris21_modalbg{
    background:rgba(0,0,0,0.6);
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
  .paris21_modal{
    position: absolute;
    left: 50%;
    top: 50%;
    @include transform(translate(-50%, -50%));
    background: #fff;
    width: 800px;
    height: 500px;
    text-align: left;
    .modal_title{
      color: $colorRed;
      font-size: 22px;
      margin-top: 40px;
      border-bottom: 2px solid $colorRed;
      padding: 0 50px 10px;
      position: relative;
      .modal_closebt{
        position: absolute;
        right: 30px;
        bottom: -5px;
        cursor: pointer;
        background: url("~/static/images/global/icon-close_box.svg") no-repeat 0 0;
        width: 60px;
        height: 60px;
      }
    }
    .modal_content{
      color: $textColor;
      overflow: auto;
      text-align: left;
      margin: 20px 50px;
      padding-right: 10px;
      height: 370px;
      overflow: auto;
      font-family: "montserratregular";
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      a{
        color: $colorRed;
        text-decoration: none;
        font-family: "montserratbold";
        display: inline-block;
        border-bottom: 2px solid $colorRed;
        line-height: 16px;
      }
      p{
        margin: 40px 0;
        text-align: left;
      }
      .content_image{
        background:url("~/static/images/global/schema-virtuous_data_cycle-2@2x.png") no-repeat 0 0;
        background-size: 100% 100%;
        width: 350px;
        height: 350px;
        display: inline-block;
      }
      .bolder{
        font-family: "montserratbold";
      }
    }
  }
}

</style>
