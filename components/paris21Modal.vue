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

    <div class="paris21_modal" v-if="type == 'privacy'">
      <div class="modal_title">
        Privacy Statement</span>
        <a class="modal_closebt" @click="closeModal()"></a>
      </div>
      <div class="modal_content">
        <p style="margin-top: 10px;">
          PARIS21 is committed to protecting the privacy and accuracy of confidential information to the extent possible, subject to provisions of state and federal law. 
        </p>
        <p>
          <span class="bolder">Concerned about privacy? We are too.</span><br />
          Although there are many applications and websites that collect information and other statistics about their users,  we do not collect any personal information about you when you visit this web site. 
        </p>
        <p>
          <span class="bolder">What happens if the privacy statement changes?</span><br />
          This Privacy Statement was last revised on 20.02.2020. We may change this Privacy Statement at any time and for any reason. We encourage you to review this Privacy Statement each time you visit the web site.<br />
          If we decide to make a significant change to our Privacy Statement, we will post a notice on the homepage of our web site for a period of time after the change is made. 
        </p>
        <p>
          <span class="bolder">What about privacy on other web sites?</span><br />
          This web site may contain links to other web sites. Some of those web sites may be operated by by third parties. We provide the links for your convenience, but we do not review, control, or monitor the privacy practices of web sites operated by others. <br />
          We are not responsible for the performance of web sites operated by third parties or for your business dealings with them. Therefore, whenever you leave this web site we recommend that you review each web site's privacy practices and make your own conclusions regarding the adequacy of these practices.
        </p>
        <p>
          <span class="bolder">How to contact us</span><br />
          If you have questions or comments about this Privacy Statement, <a href="https://paris21.org/about-paris-21/contact" target="_blank">contact us</a>.
        </p>
      </div>
    </div>

    <div class="paris21_modal" v-if="type == 'download'">
      <div class="modal_title">
        <span class="bolder">Download</span>
        <a class="modal_closebt" @click="closeModal()"></a>
      </div>
      <div class="modal_content" data-type="download">

        <div class="download_item">
          <div class="item_title">DATASET</div>
          <div class="item_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a class="download_bt" href="http://ocde.wedodata.fr/paris21_admin/API/file.csv" target="_blank">Download (.csv)</a>
        </div>

        <div class="download_item">
          <div class="item_title">CODEBOOK</div>
          <div class="item_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a class="download_bt" href="/data/codebook.xlsx" target="_blank">Download (.xls)</a>
        </div>

        <div class="download_item">
          <div class="item_title">METHODOLOGY</div>
          <div class="item_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a class="download_bt" href="/data/PARIS21_Indicators_Methodological_Notes.xlsx" target="_blank">Download (.xls)</a>
        </div>

      </div>
    </div>

    <div class="paris21_modal" v-if="type == 'moreinfo'">
      <div class="modal_title">
        <span class="bolder">{{indicatorLabel}}</span>
        <a class="modal_closebt" @click="closeModal()"></a>
      </div>
      <div class="modal_content" data-type="moreinfo">
        <div class="content_block" v-if="methodoInfos.interpretation !== undefined && methodoInfos.interpretation !== ''">
          <div class="block_title">Interpretation</div>
          <div class="block_text" v-html="methodoInfos.interpretation"></div>
        </div>
        <div class="content_block" v-if="methodoInfos.collection !== undefined && methodoInfos.collection !== ''">
          <div class="block_title">Collection method</div>
          <div class="block_text" v-html="methodoInfos.collection"></div>
        </div>
        <div class="content_block" v-if="methodoInfos.calculation !== undefined && methodoInfos.calculation !== ''">
          <div class="block_title">Calculation method</div>
          <div class="block_text" v-html="methodoInfos.calculation"></div>
        </div>
        <div class="content_block" v-if="methodoInfos.aggregation !== undefined && methodoInfos.aggregation !== ''">
          <div class="block_title">Aggregation rule</div>
          <div class="block_text" v-html="methodoInfos.aggregation"></div>
        </div>
        <div class="content_block" v-if="methodoInfos.data !== undefined && methodoInfos.data !== ''">
          <div class="block_title">Data</div>
          <div class="block_text" v-html="methodoInfos.data"></div>
        </div>
        <div class="content_block" v-if="methodoInfos.references !== undefined && methodoInfos.references != ''">
          <div class="block_title">References</div>
          <div class="block_text" v-html="methodoInfos.references"></div>
        </div>
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
        return 'privacy'
      }
    },
    indicatorLabel: {
      type: String,
      default: function () {
        return ''
      }
    },
    methodoInfos: {
      type: Object,
      default: function () {
        return {}
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
      .content_block{
        text-align: left;
        .block_title{
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
        }
      }
    }

    .modal_content[data-type="download"]{
      text-align: left;
      .download_item{
        margin-bottom: 30px;
        .item_title{
          color: $colorRed;
          font-size: 20px;
        }
        .item_text{
          font-family: "montserratbold";
          font-size: 12px;
          margin-top: 4px;
          line-height: 14px;
        }
        .download_bt{
          margin-top: 8px;
          background:$colorRed;
          display: inline-block;
          vertical-align: top;
          width: 150px;
          height: 24px;
          line-height: 24px;
          border-radius: 24px;
          font-family: "roboto_condensedbold";
          color: #fff;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
    
  }
}

</style>
