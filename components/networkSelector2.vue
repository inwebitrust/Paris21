<template>
    <div class="selector" data-selector="network" :data-state="state" :data-after-computerects="afterComputeRects">

        <div class="selector_homecontent" :class="((state == 'home') || (state == 'shrinked')) ? 'displayed' : ''" @click="expandSelector()">
            <div class="homecontent_picto"></div>
            <div class="homecontent_title">
                <span class="bolder">Find the data</span><br />
                at the appropriate level
            </div>
            <button class="homecontent_expandbt">EXPLORE</button>
        </div>

        <div class="selector_expandedcontent" :class="(state == 'expanded') ? 'displayed' : ''" :data-level="selectedLevel" :data-classif="selectedClassif">
            <div class="expandedcontent_menu">
                <div class="expandedcontent_title">
                    Explore Capacity Development 4.0
                </div>
                <div class="expandedcontent_subtitle">
                    Find more information about CD 4.0 <a href="" target="_blank">here</a>
                </div>
                
                <div class="menu_noclassif" v-if="selectedClassif == ''">
                    <div class="menu_levels">
                        <div class="menu_level" :class="(selectedLevel == 'individual') ? 'selected' : (selectedLevel !== '') ? 'notselected': ''" @click="selectMenuLevel('individual')">Individual</div>
                        <div class="menu_level" :class="(selectedLevel == 'organization') ? 'selected' : (selectedLevel !== '') ? 'notselected': ''" @click="selectMenuLevel('organization')">organization</div>
                        <div class="menu_level" :class="(selectedLevel == 'system') ? 'selected' : (selectedLevel !== '') ? 'notselected': ''" @click="selectMenuLevel('system')">system</div>
                    </div>

                    <div class="menu_disclaimer">
                        Click on the bubbles <span class="bolder">at the end of the branches</span> to discover the family of indicators
                    </div>

                    <div class="menu_area" v-if="selectedArea !== '' || selectedLevel !== ''">
                        <div class="area_title" >
                            <span v-if="(selectedArea !== '' && selectedLevel == '')">{{ selectedArea }}</span>
                            <span v-if="selectedLevel !== ''">{{ selectedArea }} - {{ selectedLevel }} level</span>
                            <a class="area_closebt" @click="selectedArea = ''; selectedLevel = ''; selectedCircle = '';"></a>
                        </div>
                        <div class="area_text" v-if="selectedNode !== undefined && selectedArea !== 'all'">
                            {{selectedNode.text}}
                        </div>
                        <div class="area_text" v-if="selectedNode !== undefined && selectedArea == 'all'">
                            {{levelsTexts[selectedLevel]}}
                        </div>
                    </div>
                </div>

                <div class="menu_classif" v-if="selectedClassif !== ''">
                    <div class="classif_title">
                        {{ selectedClassif }}
                        <a class="title_closebt" @click="selectedClassif = ''"></a>
                    </div>
                    <div class="classif_indicators">
                        <nuxt-link :to="'/indicator/'+indicator.id" v-for="(indicator, index) in corresIndicators" :key="index" class="indicator">
                            <div class="item_name">{{indicator.name}}</div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="expandedcontent_main">
                <div class="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        :width="width+'px'"
                        :height="height+'px'"
                        @mousemove="drag($event)"
                        @mouseup="drop()"
                        v-if="bounds.minX">

                        <defs>
                            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                              <stop offset="0%" style="stop-color:rgb(234,102,81);
                              stop-opacity:1" />
                              <stop offset="69%" style="stop-color:rgb(234,102,81);
                              stop-opacity:1" />
                              <stop offset="70%" style="stop-color:rgb(255,255,255);
                              stop-opacity:1" />
                              <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                            </radialGradient>
                            <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                              <stop offset="0%" style="stop-color:rgb(140,140,140);
                              stop-opacity:1" />
                              <stop offset="69%" style="stop-color:rgb(140,140,140);
                              stop-opacity:1" />
                              <stop offset="70%" style="stop-color:rgb(255,255,255);
                              stop-opacity:1" />
                              <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                            </radialGradient>
                        </defs>

                    <line v-for="link in graph.links"
                        :x1="coords[link.source.index].x"
                        :y1="coords[link.source.index].y"
                        :x2="coords[link.target.index].x"
                        :y2="coords[link.target.index].y"
                        stroke-width="2"
                        class="svgLine"
                        :data-source="computeNodeNameFromLink(link, 'source')"
                        :data-target="computeNodeNameFromLink(link, 'target')"
                        :data-highlighting="computeLinkHighlighting(link)"
                    />

                    <circle v-for="(node, i) in graph.nodes"
                        :cx="coords[i].x"
                        :cy="coords[i].y"
                        :r="computeRadius(node)"
                        stroke="white" stroke-width="1"
                        @mouseover="hoverNode(node)"
                        @mouseleave="leaveNode()"
                        @mousedown="currentMove = {x: $event.screenX, y: $event.screenY, node: node}"
                        :data-type="node.type"
                        :data-level="node.level"
                        :data-area="node.area"
                        :data-index="node.index"
                        :data-selected="(node.index == selectedCircle && node.type !== 'classif' && node.type !== 'root') ? 'true' : 'false'"
                        class="node svgCircle"
                        :data-highlighting="computeNodeHighlighting(node)"
                        @click="selectCircle(node)"
                    />

                    <rect v-for="(node, i) in graph.nodes"
                        :x="coords[i].x - 30"
                        :y="(node.type == 'area') ? coords[i].y + 30 : coords[i].y + 16"
                        height="20"
                        rx="15"
                        ry="15"
                        :data-index="node.index"
                        class="svgRect"
                        :class="( (node.type == 'area' || hoveredNodeIndex == node.index) && node.type !== 'root' ) ? 'displayed' : ''"
                        :fill="(node.type == 'area') ? '#EDEDED' : '#333'"
                    />

                    <text v-for="(node, i) in graph.nodes"
                        :x="coords[i].x - 20"
                        :y="(node.type == 'area') ? coords[i].y + 45 : coords[i].y + 30"
                        :data-index="node.index"
                        :data-type="node.type"
                        class="svgText"
                        :class="( (node.type == 'area' || hoveredNodeIndex == node.index) && node.type !== 'root' ) ? 'displayed' : ''">{{ node.name }}</text>
                    </svg>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import * as UTILS from '~/commons/utils/index.js'
    import {_} from 'underscore'

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
                levelsTexts: {
                    'individual':'A single human being working for the National Statistical System independent from entity, rank or position.',
                    'organization':'A social entity (such as the National Statistical Office or a line ministry) comprised of multiple interacting individuals that are coordinated through a hierarchy of authority and responsibility to achieve an explicit, common purpose (such as statistical production).',
                    'system':'An organized, purposeful structure consisting of interrelated and interdependent individuals, organizations or stakeholders whose activities relate to data and statistics at the regional, national and international level.'
                },
                graph: {
                  nodesOld: d3.range(100).map(i => ({ index: i, x: null, y: null })),
                  linksOld: d3.range(99).map(i => ({ source: Math.floor(Math.sqrt(i)), target: i + 1 })),
                  nodes: [
                    {index:0, x:null, y:null, name:'root', type: 'root'},
                        {index:1, x:null, y:null, name:'incentives', type: 'area', soloLevel:'system', area: 'incentives', text:'Incentives are the motives guiding behaviour at different levels in the National Statistical System. Engaging with personal motivations and career expectations can foster change and improvements in statistical production processes.'},
                            {index:2, x:null, y:null, name:'system', area: 'incentives', level: 'system', type: 'level', text: 'The structural motives guiding behaviour at different levels in the National Statistical System. For example, stakeholders` interest and political support for data and statistics actively affects available resources and a nationally enabling environment.'},
                                {index:3, x:null, y:null, name:'Stakeholders\' interest', area: 'incentives', level: 'system', type: 'classif', classif:'Stakeholders\' interest'},
                                {index:4, x:null, y:null, name:'Legitimacy', area: 'incentives', level: 'system', type: 'classif', classif:'Legitimacy'}, 
                        {index:5, x:null, y:null, name:'management', type: 'area', area: 'management', text:'Management is the coordination and combination of skills and knowledge with various resources to produce a statistical output. Defining clear strategies, acquiring sufficient resources, and allocating tasks and responsibilities efficiently needs a sustained effort of good leadership.'},
                            {index:6, x:null, y:null, name:'system', area: 'management', type: 'level', level: 'system', text:'The structural coordination and combination of skills and knowledge and various resources to produce a statistical output. For example, coordination mechanisms within the National Statistical System are important for knowledge sharing and collaboration between various entities following different agendas.'},
                                {index:7, x:null, y:null, name:'Advocacy strategy', area: 'management', level: 'system', type: 'classif', classif: 'Advocacy strategy'},
                            {index:8, x:null, y:null, name:'organization', area: 'management', level: 'organization', type: 'level', level: 'organization', text:'A social entity`s coordination and combination of skills and knowledge and various resources to produce a statistical output. For example, strategic planning, monitoring and evaluation, and effective organisational design are supporting sustainable statistical outputs in National Statistical Offices.'},
                                {index:9, x:null, y:null, name:'Fundraising strategies', area: 'management', level: 'organization', type: 'classif', classif: 'Fundraising strategies'},
                        {index: 10, x:null, y:null, name:'politics and power', type: 'area', area: 'politics and politics', text:'Politics & Power are the formal or informal interactions between the individuals and units of a National Statistical System. For example, workplace politics are strategic activities, attitudes or behaviours of staff members in the workplace that aim at gaining or keeping power.'},
                            {index: 11, x:null, y:null, name:'system', area: 'politics and power', type: 'level', level: 'system', text:'The structural formal and informal interactions between individuals and entities within the National Statistical System. For example, relationships with users and new data source providers are crucial to align demand- and supply-side needs, and efficiently complement official statistics using new data opportunities.'},
                                {index: 12, x:null, y:null, name:'Accountability', area: 'politics and power', level: 'system', type: 'classif', classif: 'Accountability'},
                                {index: 13, x:null, y:null, name:'Relationship with users', area: 'politics and power', level: 'system', type: 'classif', classif: 'Relationship with users'},
                            {index: 14, x:null, y:null, name:'organization', area: 'politics and power', type: 'level', level: 'organization', text:'An organisation’s formal and informal interactions with other entities within the National Statistical System. For example, transparency practices are highly valued in the national and international statistical community, but also lead to more scrutiny of statistical outputs and workplace politics.'},
                                {index: 15, x:null, y:null, name:'Transparency', area: 'politics and power', level: 'organization', type: 'classif', classif: 'Transparency'},
                        {index: 16, x:null, y:null, name:'resources', type: 'area', area: 'resources', text:'Resources are the means (human, physical, financial, legal) required to produce a statistical output. Rapid technological change challenges physical infrastructure and workforce composition of National Statistical Systems.'},
                            {index: 17, x:null, y:null, name:'system', area: 'resources', type: 'level', level: 'system', text:'The structural means that are required to produce a statistical output. For example, the National Statistical System is embedded in a legislative and institutional setting actively fostering the adequate coordination and collaboration between individuals, entities or stakeholders.'},
                                {index: 18, x:null, y:null, name:'Plans', area: 'resources', level: 'system', type: 'classif', classif : 'Plans'},
                                {index: 19, x:null, y:null, name:'Legislation, Principles and Institutional setting', area: 'resources', level: 'system', type: 'classif', classif: 'Legislation, Principles and Institutional setting'},
                                {index: 20, x:null, y:null, name:'Funds infrastructure', area: 'resources', level: 'system', type: 'classif', classif: 'Funds infrastructure'},
                                {index: 21, x:null, y:null, name:'Existing data', area: 'resources', level: 'system', type: 'classif', classif: 'Existing data'},
                            {index: 22, x:null, y:null, name:'organization', area: 'resources', type: 'level', level: 'organization', text:'A social entity’s (such as the National Statistical Office or a line ministry) available means that are required to produce a statistical output. For example, National Statistical Offices need adequate human and financial resources to produce timely and high-quality statistics.'},
                                {index: 23, x:null, y:null, name:'Budget', area: 'resources', level: 'organization', type: 'classif', classif: 'Budget'},
                                {index: 24, x:null, y:null, name:'Infrastructure', area: 'resources', level: 'organization', type: 'classif', classif: 'Infrastructure'},
                        {index: 25, x:null, y:null, name:'skills & knowledge', type: 'area', area: 'skills & knowledge', text:'Skills & Knowledge are the cognitive and non-cognitive abilities (e.g. information processing, teamwork) required to perform a task related to data and statistics. The new data ecosystem requires an updated set of skills and knowledge.'},
                            {index: 26, x:null, y:null, name:'organization', area: 'skills & knowledge', type: 'level', level: 'organization', text:'The structural cognitive and non-cognitive abilities that are required to perform a task related to data and statistics. For example, data literacy and knowledge sharing are crucial structural abilities for statistical capacity development. '},
                                {index: 27, x:null, y:null, name:'Statistical production processes', area: 'skills & knowledge', level: 'organization', type: 'classif', classif: 'production'},
                                {index: 28, x:null, y:null, name:'Communication', area: 'skills & knowledge', level: 'organization', type: 'classif', classif: 'Communication'},
                                {index: 29, x:null, y:null, name:'Quality assurance and codes of conduct', area: 'skills & knowledge', level: 'organization', type: 'classif', classif: 'Quality assurance and codes of conduct'},
                            {index: 30, x:null, y:null, name:'system', area: 'skills & knowledge', type: 'level', level: 'system', text:'The structural cognitive and non-cognitive abilities that are required to perform a task related to data and statistics. For example, data literacy and knowledge sharing are crucial structural abilities for statistical capacity development.'},
                                {index: 31, x:null, y:null, name:'Data Literacy', area: 'skills & knowledge', level: 'system', type: 'classif', classif: 'Data Literacy'},
                                {index: 32, x:null, y:null, name:'Advocacy strategy', area: 'skills & knowledge', level: 'system', type: 'classif', classif: 'Advocacy strategy'},
                                {index: 33, x:null, y:null, name:'Accountability', area: 'skills & knowledge', level: 'system', type: 'classif', classif: 'Accountability'},
                                {index: 34, x:null, y:null, name:'Existing data', area: 'skills & knowledge', level: 'system', type: 'classif', classif: 'Existing data'},
                                {index: 35, x:null, y:null, name:'Knowledge sharing', area: 'skills & knowledge', level: 'system', type: 'classif', classif: 'Knowledge sharing'},
                  ],
                  links: [
                    { source: 0, target: 1, area:'incentives'},
                        { source: 1, target: 2, area:'incentives', level:'system'},
                            { source: 2, target: 3, area:'incentives', level:'system', classif:'Stakeholders\' interest'},
                            { source: 2, target: 4, area:'incentives', level:'system', classif:'Legitimacy'},
                    { source: 0, target: 5, area:'management'},
                        { source: 5, target: 6, area:'management', level: 'system'},
                            { source: 6, target: 7, area:'management', level: 'system', classif: 'Advocacy strategy'},
                        { source: 5, target: 8, area:'management', level: 'organization'},
                            { source: 8, target: 9, area:'management', level: 'organization', classif: 'Fundraising strategies'},
                    { source: 0, target: 10, area: 'politics and power'},
                        {source: 10, target: 11, area: 'politics and power', level: 'system'},
                            {source: 11, target: 12, area: 'politics and power', level: 'system', classif: 'Accountability'},
                            {source: 11, target: 13, area: 'politics and power', level: 'system', classif: 'Relationship with users'},
                        {source: 10, target: 14, area: 'politics and power', level: 'organization'},
                            {source: 14, target: 15, area: 'politics and power', level: 'organization', classif: 'Transparency'},
                    { source : 0, target: 16, area: 'resources'},
                        { source: 16, target: 17, area: 'resources', level: 'system'},
                            { source: 17, target: 18, area: 'resources', level: 'system', classif: 'Plans'},
                            { source: 17, target: 19, area: 'resources', level: 'system', classif: 'Legislation, Principles and Institutional setting'},
                            { source: 17, target: 20, area: 'resources', level: 'system', classif: 'Funds infrastructure'},
                            { source: 17, target: 21, area: 'resources', level: 'system', classif: 'Existing data'},
                        { source: 16, target: 22, area: 'resources', level: 'organization'},
                            { source: 22, target: 23, area: 'resources', level: 'organization', classif: 'Budget'},
                            { source: 22, target: 24, area: 'resources', level: 'organization', classif: 'Infrastructure'},
                    { source: 0, target: 25, area: 'skills & knowledge'},
                        { source: 25, target: 26, area: 'skills & knowledge', level: 'organization'},
                            { source: 26, target: 27, area: 'skills & knowledge', level: 'organization', classif: 'Statistical production processes'},
                            { source: 26, target: 28, area: 'skills & knowledge', level: 'organization', classif: 'Communication'},
                            { source: 26, target: 29, area: 'skills & knowledge', level: 'organization', classif: 'Quality assurance and codes of conduct'},
                        { source: 25, target: 30, area: 'skills & knowledge', level: 'system'},
                            { source: 30, target: 31, area: 'skills & knowledge', level: 'system', classif: 'Data Literacy'},
                            { source: 30, target: 32, area: 'skills & knowledge', level: 'system', classif: 'Advocacy strategy'},
                            { source: 30, target: 33, area: 'skills & knowledge', level: 'system', classif: 'Accountability'},
                            { source: 30, target: 34, area: 'skills & knowledge', level: 'system', classif: 'Existing data'},
                            { source: 30, target: 35, area: 'skills & knowledge', level: 'system', classif: 'Knowledge sharing'},
                  ]
                },
                width: 630,
                height: 527,
                padding: 60,
                colors: ['#2196F3', '#E91E63', '#7E57C2', '#009688', '#00BCD4', '#EF6C00', '#4CAF50', '#FF9800', '#F44336', '#CDDC39', '#9C27B0'],
                simulation: null,
                currentMove: null,
                selectedLevel: '',
                selectedClassif: '',
                selectedArea: '',
                selectedNode: '',
                selectedCircle: '',
                corresIndicators: [],
                hoveredNodeIndex: '',
                afterComputeRects: false
            }
        },
        created: function () {
            
        },

        mounted: function () {
            var that = this;

            if(this.$store.csvDataPromiseIndicators === undefined) {
                this.$store.csvDataPromiseIndicators = UTILS.getAPIIndicators(this.$store)
                this.$store.csvDataPromiseIndicators.then( function(promiseCallback) {
                    that.initAfterDataLoaded()
                })
            } else {
                this.initAfterDataLoaded()
            }
        },

        computed: {
            bounds() {
              return {
                minX: Math.min(...this.graph.nodes.map(n => n.x)),
                maxX: Math.max(...this.graph.nodes.map(n => n.x)),
                minY: Math.min(...this.graph.nodes.map(n => n.y)),
                maxY: Math.max(...this.graph.nodes.map(n => n.y))
              }
            },
            coords() {
              return this.graph.nodes.map(node => {
                return {
                  x: this.padding + (node.x - this.bounds.minX) * (this.width - 2*this.padding) / (this.bounds.maxX - this.bounds.minX),
                  y: this.padding + (node.y - this.bounds.minY) * (this.height - 2*this.padding) / (this.bounds.maxY - this.bounds.minY)
                }
              })
            }
        },
        methods: {
            initAfterDataLoaded: function () {
                var self = this
                this.startSimulation();

                setTimeout(function () {
                    self.computeRectsWidthFromLabel()
                }, 100)
            },

            expandSelector: function () {
                this.$parent.selectorExpanded = 'network'
            },

            startSimulation: function () {
                this.simulation = d3.forceSimulation(this.graph.nodes)
                    .force('charge', d3.forceManyBody().strength(d => -100))
                    .force('link', d3.forceLink(this.graph.links))
                    .force('x', d3.forceX())
                    .force('y', d3.forceY())
            },

            drag(e) {
              if (this.currentMove) {
                this.currentMove.node.fx = this.currentMove.node.x - (this.currentMove.x - e.screenX) * (this.bounds.maxX - this.bounds.minX) / (this.width - 2 * this.padding)
                this.currentMove.node.fy = this.currentMove.node.y -(this.currentMove.y - e.screenY) * (this.bounds.maxY - this.bounds.minY) / (this.height - 2 * this.padding)
                this.currentMove.x = e.screenX
                this.currentMove.y = e.screenY
              }
            },
            drop(){
              delete this.currentMove.node.fx
              delete this.currentMove.node.fy    
              this.currentMove = null
              this.simulation.alpha(1)
              this.simulation.restart()
            },
            computeRadius: function(node) {
                if(node.type == 'root') return 32
                else if(node.type == 'area') return 24
                else if(node.type == 'level') return 9
                return 7
            },
            computeNodeNameFromLink: function( link, way) {
                if(link !== undefined && link.source !== undefined) {
                    if(way == 'source'){
                        return this.graph.nodes[link.source.index].name
                    } else {
                        return this.graph.nodes[link.target.index].name
                    }
                } 
            },
            computeLinkHighlighting: function (link) {
                //selected level
                if(this.selectedClassif == ''){
                    if(this.selectedLevel == '') { //default view
                        return 'default'
                    } else {
                        if(this.selectedLevel == link.level) {
                            if(this.selectedArea == 'all') return 'highlighted'
                            else {
                                if(this.selectedArea == link.area) return 'highlighted'
                                return 'delighted'
                            }
                        } else {
                            if(this.selectedLevel !== '' && this.selectedClassif == '' && link.source.index == 0) {
                                if(this.selectedArea == 'all' || this.selectedArea == link.area) return 'highlighted'
                                return 'delighted'
                            }
                            return 'delighted'
                        }
                    } 
                } else {
                    if(link.area == this.selectedNode.area && link.level === undefined) return 'highlighted'
                    if(link.area == this.selectedNode.area && link.level == this.selectedNode.level && link.classif === undefined) return 'highlighted'
                    if(link.area == this.selectedNode.area && link.level == this.selectedNode.level && link.classif === this.selectedClassif) return 'highlighted' 
                }

                return 'default'
            },
            computeNodeHighlighting: function (node) {
                //selecting level ?
                if(this.selectedClassif == ''){
                    if(this.selectedLevel == '') { //default view
                        return 'default'
                    } else { // level selected
                        if(this.selectedLevel == node.level) {
                            if(this.selectedArea == 'all') return 'highlighted'
                            else {
                                if(this.selectedArea == node.area) return 'highlighted'
                                return 'delighted'
                            }
                        } else {
                            return 'delighted'
                        }
                    }
                } else {
                    if(node.area == this.selectedNode.area && node.level === undefined) return 'highlighted'
                    if(node.area == this.selectedNode.area && node.level == this.selectedNode.level && node.classif === undefined) return 'highlighted'
                    if(node.area == this.selectedNode.area && node.level == this.selectedNode.level && node.classif === this.selectedClassif) return 'highlighted' 
                    return 'delighted'
                }
            },
            selectCircle: function (node) {
                var self = this

                if(node.index == this.selectedCircle) {
                    this.selectedClassif = ''
                    this.selectedArea = ''
                    this.selectedLevel = ''
                    this.selectedNode = ''
                    this.selectedCircle = ''
                    return true
                }

                this.selectedNode = node
                this.selectedCircle = node.index

                if(node.type == 'classif') {
                    this.selectedClassif = node.name;
                    this.selectedLevel = node.level;
                    this.selectedArea = node.area;

                    console.log(self.selectedClassif);
                    console.log('store indic', this.$store.DBIndicators);
                    this.corresIndicators = _.filter(this.$store.DBIndicators, function(ind) {
                        if(ind.area.toLowerCase() == self.selectedArea.toLowerCase() && ind.level.toLowerCase() == self.selectedLevel.toLowerCase() && ind.family.toLowerCase() == self.selectedClassif.toLowerCase()) {
                            return true
                        }
                        return false
                    })
                } else if(node.type == 'area'){
                    if(this.selectedArea == node.name) this.selectedArea = ''
                    else this.selectedArea = node.name
                    this.selectedClassif = ''
                } else if(node.type == 'level'){
                    this.selectedLevel = node.level
                    this.selectedArea = node.area
                    this.selectedClassif = ''
                } else {
                    this.selectedClassif = ''
                    this.selectedArea = ''
                }
            },

            selectMenuLevel: function (level) {
                if(this.selectedLevel != level) {
                    this.selectedLevel = level
                    this.selectedArea = 'all'
                } else {
                    this.selectedLevel = ''
                    this.selectedArea = ''
                }
            },

            computeRectsWidthFromLabel: function () {

                _.each(this.graph.nodes, function(node){
                    var $correspondingTextNode = document.querySelector('.svgText[data-index="'+node.index+'"]')
                    var $correspondingRect = document.querySelector('.svgRect[data-index="'+node.index+'"]')

                    var rectWidth = 100;
                    if($correspondingTextNode !== null){
                        rectWidth = $correspondingTextNode.getBoundingClientRect().width + 20;
                    }
                    $correspondingRect.setAttribute('width', rectWidth)
                })
            },

            hoverNode: function (node) {
                this.hoveredNodeIndex = node.index
            },

            leaveNode: function () {
                this.hoveredNodeIndex = ''
            }
        },
        updated: function () {
            
        },

        watch: {
            state: function () {
                var self = this
                console.log('change state')
                this.afterComputeRects = false
                setTimeout(function (){
                    self.computeRectsWidthFromLabel()   
                }, 10)

                setTimeout(function (){
                    self.afterComputeRects = true
                }, 100)
            }
        }
    }
</script>

<style lang="scss">
    @import "~assets/scss/_variables.scss";
    @import "~assets/scss/_browsers.scss";

    .selector[data-selector="network"]{
        &[data-state="expanded"]{
            height: 527px;
        }
        .selector_expandedcontent{
            display: none;
            height: 100%;
            padding: 0px;
            &.displayed{
                display: block;
            }
        }
        .expandedcontent_menu{
            width: 35%;
            height: 100%;
            background: #fff;
            display: inline-block;
            vertical-align: top;
            box-shadow: 10px 0px 50px 4px rgba(0,0,0,0.2);
            padding: 20px;
            .expandedcontent_title{
                .smaller{
                    font-size: 18px;
                    font-family: "montserratregular";
                }
            }
            .expandedcontent_subtitle{
                font-family:"montserratregular";
                font-size:12px;
                color: #2F2F2F;
                text-align: left;
                margin-top: 6px;
                a{
                    color: #2F2F2F;
                    text-decoration: none;
                    font-family: "montserratbold";
                    border-bottom:2px solid $colorOrange;
                }
            }
            .menu_levels{
                margin-top: 20px;
                text-align: left;
                .menu_level{
                    display: inline-block;
                    vertical-align: top;
                    width: 150px;
                    height: 30px;
                    line-height: 26px;
                    color: #EC9A3A;
                    text-align: center;
                    cursor: pointer;
                    border:2px solid $colorOrange;
                    border-radius: 20px;
                    margin: 5px 0;
                    font-size: 16px;
                    text-transform: uppercase;
                    font-family: "roboto_condensedbold";
                    &.selected{
                        background: $colorOrange;
                        color: #fff;
                    }
                    &.notselected{
                        color: #8C8C8C;
                        border-color: #8C8C8C;
                    }
                    &:hover{
                        color:#2F2F2F;
                        border-color: #2F2F2F;
                    }
                }
            }
            .menu_disclaimer{
                margin-top: 20px;
                color: #8C8C8C;
                font-family: "montserratitalic";
                font-size: 11px;
                line-height: 14px;
                text-align: left;
                width: 140px;
                position: relative;
                text-indent: 18px;
                .bolder{
                    font-weight: 700;
                }
                &:before{
                    content:"";
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    background: url("~/static/images/global/dot-legend.svg") no-repeat 0 0;
                    background-size: 100% 100%;
                    width: 14px;
                    height: 14px;
                }
            }

            .menu_area{
                background: $colorOrange;
                padding: 14px;
                text-align: left;
                margin-top: 20px;
                max-height: 190px;
                .area_title{
                    color: #fff;
                    font-size: 16px;
                    font-weight: "montserratbold";
                    text-transform: capitalize;
                    border-bottom: 3px solid #fff;
                    padding-bottom: 4px;
                    position: relative;
                    .area_closebt{
                        position: absolute;
                        right: -20px;
                        top: -20px;
                        background: url("~/static/images/global/icon-close_box-white.svg") no-repeat 0 0;
                        background-size: 100% 100%;
                        width: 40px;
                        height: 40px;
                        cursor: pointer;
                        display: block;
                    }
                }
                .area_text{
                    color: #fff;
                    font-size: 12px;
                    line-height: 16px;
                    margin-top: 10px;
                    max-height: 115px;
                    overflow: auto;
                }
            }

            .menu_classif{
                background: $colorRed;
                padding: 20px 20px;
                text-align: left;
                margin-top: 20px;
                position: relative;
                .classif_title{
                    font-size: 16px;
                    font-family: "montserratbold";
                    line-height: 22px;
                    border-bottom: 3px solid #FFF;
                    padding-bottom: 6px;
                    color: #fff;
                    position: relative;
                    text-transform: capitalize;
                    .title_closebt{
                        position: absolute;
                        right: 0px;
                        top: 50%;
                        @include transform(translate(0, -50%));
                        background: url("~/static/images/global/icon-close_box.svg") no-repeat 0 0;
                        background-size: 100% 100%;
                        width: 30px;
                        height: 30px;
                        cursor: pointer;
                        display: block;
                    }
                }
                .classif_indicators{
                    position: relative;
                    height: 320px;
                    overflow: auto;
                    width: 100%;
                    margin-top: 14px;
                    .indicator{
                        height: 40px;
                        line-height: 40px;
                        border-bottom: 2px solid $colorDarkRed;
                        color: #fff;
                        text-decoration: none;
                        display: block;
                        padding: 0 20px 0 10px;
                        position: relative;
                        overflow: hidden;
                        &:hover{
                            background: $colorDarkRed;
                        }
                        &:after{
                            content: "";
                            position: absolute;
                            right: 0px;
                            top: 50%;
                            @include transform(translate(0, -50%));
                            background:url("~/static/images/global/icon-chevron-white.svg") no-repeat 0 0;
                            background-size: 100% 100%;
                            width: 30px;
                            height: 30px;
                        }
                    }
                }
            }
        }
        .expandedcontent_main{
            width: 65%;
            height: 100%;
            display: inline-block;
            vertical-align: top;
            position: relative;
        }

        .svg-container {
            position: relative;
            width:100%;
            height: 100%;
            svg{
                width:100%;
                height: 100%;
                .svgCircle{
                    fill:#fff;
                    cursor: pointer;
                    stroke-width:2px;
                    stroke: #EC9A3A;
                    &[data-type="classif"]{
                        fill: url(#grad1);
                        stroke:#B45747;
                    }
                    &[data-selected="true"]{
                        fill:$colorOrange;
                        stroke: $colorOrange !important;
                    }
                    &[data-highlighting="delighted"]{
                        stroke: #B8B8B8;
                        &[data-type="classif"]{
                            fill: url(#grad2);
                            stroke: #8c8c8c;
                        }
                    }
                    &[data-type="root"]{
                        stroke: #A15E14 !important;
                    }
                }
                .svgRect{
                    display: none;
                    &.displayed{
                        display: block;
                    }
                }
                .svgText{
                    fill:#fff;
                    text-transform: capitalize;
                    //display: none;
                    &.displayed{
                        display: block;
                    }
                    &[data-type="area"]{
                        fill: #333;
                    }
                }
                .svgLine{
                    stroke:#B8B8B8;
                    &[data-highlighting="highlighted"]{
                        stroke: $colorOrange;
                        stroke-width: 3px;
                    }
                    &[data-highlighting="delighted"]{

                    }
                }
            }
        }

        label {
            display: block;
        }
    }

    .links line {
        stroke: $colorOrange;
        stroke-opacity: 0.6;
    }

    .nodes circle {
        stroke: $colorOrange;
        stroke-width: 2px;
    }

    .selector[data-selector="network"][data-after-computerects="true"]{
        .svgText{
            display: none !important;
            &.displayed{
                display: block !important;
            }
        }
    }
</style>
