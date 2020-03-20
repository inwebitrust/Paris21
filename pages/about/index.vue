<template>
  <div id="AboutPage" class="page" data-page="about">
    <paris21Header :page="'about'" @downloadModal="displayDownloadModal = true"></paris21Header>

    <div class="page_main">
      <div class="main_wrapper">
        <div class="page_title">About Statistical Capacity Monitor</div>
        <div class="page_content">
          <p><span class="bolder">1. Why a Statistical Capacity Monitor? </span></p>
          <p>National statistics are an essential component of policy making. They provide the evidence required to improve the lives of citizens, monitor results and hold governments accountable. Recent international agreements such as the 2030 Agenda for Sustainable Development and Agenda 2063 for Africa recognise the central role of strong statistics and place a significant emphasis on goals, indicators and national reporting. </p>
          <p>At the same time, technological advances create a wealth of new data sources, some of which have the potential to enrich national statistical systems and enable more effective and responsive policy making. Although some countries have seen improvements in statistical capacity in recent decades, the results have not been universal. Today, a third of national statistical offices feel that statistical capacity development programmes are not meeting their needs.</p>
          <p>There is an urgent need to empower countries to track their progress towards more advanced statistical capacities, and to enable donors to invest in more and better data for development. Moreover, countries should use common benchmarks to evaluate their past, ongoing or planned NSDS processes, and thus improve their data planning processes.</p>
          <p>PARIS21’s Statistical Capacity Monitor was launched in April 2019 to describe global, regional and national statistical capacity trends. The Monitor features around 100 indicators on statistical capacity, and an intuitive interactive interface makes geographic and sectoral comparison, benchmarking and analysis quick and simple.</p>
          <p>The value-added of the platform is threefold:</p>
 
          <ul>
            <li><span class="bolder">Analysis:</span> Quick understanding of regional and periodic trends in capacity development</li>
            <li><span class="bolder">Transparency:</span> Comprehensive overview over a variety of statistical capacity measurements </li>
            <li><span class="bolder">Coordination:</span>  Effective allocation of funds based on scientifically validated indicators</li>
          </ul>
          
          <br />

          <p><span class="bolder">2. How it works</span></p>
          <p>Considering the breadth, depth, and relation of the indicators in the Statistical Capacity Monitor, the data is classified according to five families:</p>
          <ul>
            <li><span class="bolder">Planning:</span> the process of making arrangements for statistical production</li>
            <li><span class="bolder">Production:</span> the process of constructing statistics</li>
            <li><span class="bolder">Dissemination:</span> the action of spreading statistical information widely</li>
            <li><span class="bolder">Use:</span> statistical literacy, use and esteem of statistics</li>
            <li><span class="bolder">Investment:</span> devotion of resources to the statistical system</li>
          </ul>
          <p>Most of the indicators have an annual periodicity. Users can visualise the data and cross-tabulate different types of indicators.</p>

          <br />

          <p><span class="bolder">3. Who is it for?</span></p>
          <p>Anybody interested in understanding and analysing how statistical capacity changes over time, and why. </p>
          <p>Specific user groups include:</p>
          <table class="about_table" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span class="bigger">National Statistical Offices</span><br />
                Statistical Authorities
              </td>
              <td>
                <span class="bigger">Government (agencies)</span><br />
                Ministries of Planning<br />
                Ministries of Finance<br />
                Line ministries or public agencies
              </td>
              <td>
                <span class="bigger">Academia</span><br />
                Universities<br />
                Research institutes<br />
                Statistical training institutes
              </td>
            </tr>
            <tr>
              <td>
                <span class="bigger">Donor community</span><br />
                Multilateral organisations<br />
                Regional banks<br />
                National Development cooperation agencies<br />
                Private foundations
              </td>
              <td>
                <span class="bigger">Civil Society</span>
                NGOs<br />
                Think Tanks<br />
                Civil Society Organisations
              </td>
              <td>
                <span class="bigger">Media</span><br />
                Journalists
              </td>
            </tr>
            <tr>
              <td colspan="3" class="centered"><span class="bigger">Citizens</span></td>
            </tr>
          </table>
          <br />

          <p><span class="bolder">4. Links to other platforms </span></p>
          <ul>
            <li><a href="https://data.oecd.org/" target="_blank">OECD Data</a></li>
            <li><a href="www.fao.org/faostat/en/#home" target="_blank">FAOSTAT</a></li>
            <li><a href="http://www.fao.org/food-agriculture-microdata/en/" target="_blank">Food and Agriculture Microdata Catalogue</a></li>
            <li><a href="https://mo.ibrahim.foundation" target="_blank">Ibrahim Index of African Governance</a></li>
            <li><a href="https://sdmxcentral.imf.org/overview.html" target="_blank">IMF SDMX Central</a></li>
            <li><a href="https://unstats.un.org/home/nso_sites/" target="_blank">NSO websites</a></li>
            <li><a href="https://opendatawatch.com/monitoring/" target="_blank">Open Data Inventory (ODIN)</a></li>
            <li><a href="https://unstats.un.org/sdgs/indicators/database/" target="_blank">SDG Global Database</a></li>
            <li><a href="https://datatopics.worldbank.org/statisticalcapacity/SCIdashboard.aspx" target="_blank">World Bank Statistical Capacity Dashboard</a></li>
            <li><a href="https://datatopics.worldbank.org/world-development-indicators/" target="_blank">World Bank Development Indicators</a></li>
            <li><a href="https://info.worldbank.org/governance/wgi/" target="_blank">Worldwide Governance Indicators</a></li>
          </ul>

          <br />
          
          <p><span class="bolder">Updates</span></p>
          <p>New indicators will be added and existing ones updated on an annual basis. For a detailed dissemination calendar, please click <a href="/pdf/DisseminationCalendar.pdf" target="_blank">here</a>.</p>

          <p><span class="bolder">Proposals of new indicators</span></p>
          <p>PARIS21 welcomes proposals of new indicators throughout the year. The proposals can be submitted via <a href="mailto:contact@statisticalcapacitymonitor.org" target="_blank">contact@statisticalcapacitymonitor.org</a>. Submitted indicators will be reviewed and validated every month by the PARIS21 team. In case of approval, you will be contacted for further information. To be included in the Statistical Capacity Monitor, the indicator will need to pass a validation process by our team and relevant experts.</p>

          <p><span class="bolder">Content support/ Data requests</span></p>
          <p>For any request regarding specific indicators, statistical capacity trends or content-related enquiries, please contact:<br /><a href="mailto:contact@statisticalcapacitymonitor.org">contact@statisticalcapacitymonitor.org</a></p>

        </div>
      </div>
    </div>

    <paris21Modal type="download" :displayed="displayDownloadModal" @closeModal="displayDownloadModal = false"></paris21Modal>
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
  #AboutPage{
    .page_main{
      background: #fff;
      margin-bottom: 60px;
    }
  }
  .page_title{
    color: $colorRed;
    font-size: 22px;
    margin-top: 40px;
    border-bottom: 2px solid $colorRed;
    padding: 0 50px 10px;
    position: relative;
  }
  .page_content{
    color: $textColor;
    text-align: left;
    margin: 20px 50px;
    padding-right: 10px;
    overflow: auto;
    font-family: "montserratregular";
    font-size: 14px;
    text-align: left;
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
      margin: 20px 0;
      text-align: left;
    }
    ul{
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
  .about_table{
    border:1px solid;
    text-align: left;
    border-collapse: collapse;
    td{
      border:1px solid;
      text-align: left;
      border-collapse: collapse;
      padding: 10px;
      &.centered{
        text-align: center;
      }
    }
    .bigger{
      font-weight: 700;
      font-size: 14px;
    }
  }
  
</style>
