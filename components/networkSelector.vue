<template>
    <div class="selector" data-selector="network" :data-state="state">

        <div class="selector_homecontent" :class="((state == 'home') || (state == 'shrinked')) ? 'displayed' : ''" @click="expandSelector()">
            <div class="homecontent_picto"></div>
            <div class="homecontent_title">
                <span class="bolder">Find the data</span><br />
                at the appropriate level
            </div>
            <button class="homecontent_expandbt">EXPLORE</button>
        </div>

        <div class="selector_expandedcontent" :class="(state == 'expanded') ? 'displayed' : ''">
            <div class="expandedcontent_menu">
                <div class="expandedcontent_title">
                    <span class="smaller">Find the data at</span><br />
                    the appropriate level
                </div>

                <div class="menu_categories">
                    <div class="menu_category" :class="(selectedCategory == 'individual') ? 'selected' : (selectedCategory !== '') ? 'notselected': ''" @click="(selectedCategory != 'individual') ? selectedCategory = 'individual' : selectedCategory = ''">Individual</div>
                    <div class="menu_category" :class="(selectedCategory == 'organization') ? 'selected' : (selectedCategory !== '') ? 'notselected': ''" @click="(selectedCategory != 'organization') ? selectedCategory = 'organization' : selectedCategory = ''">Organization</div>
                    <div class="menu_category" :class="(selectedCategory == 'system') ? 'selected' : (selectedCategory !== '') ? 'notselected': ''" @click="(selectedCategory != 'system') ? selectedCategory = 'system' : selectedCategory = ''">System</div>
                </div>

                <div class="menu_disclaimer">
                    Click on the bubbles <span class="bolder">at the end of the branches</span> to discover the family of indicators
                </div>
            </div>
            <div class="expandedcontent_main">
                <div class="svg-container">
                    <svg id="svg" pointer-events="all" viewBox="0 0 960 527" preserveAspectRatio="xMinYMin meet">
                        <g :id="links"></g>
                        <g :id="nodes"></g>
                    </svg>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
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
                graph: null,
                simulation: null,
                color: d3.scaleOrdinal(d3.schemeCategory20),
                settings: {
                    strokeColor: "#29B5FF",
                    width: 100,
                    height: 100,
                    svgWigth: 960,
                    svgHeight: 527
                },
                selectedCategory: '',
            }
        },
        mounted: function () {
            var that = this;
            console.log("mounted", d3);

            this.treeNodesObj = {}
            this.treeNodes = [{"id":"Root","num":0,"name":"Root","type":"node"}]
            this.treeLinks = []

            d3.csv("/data/scheme.csv", function(scheme) {

                var currentNum = 1

                _.each(scheme, function(data, indexRow) {
                    var areaID = data.area
                    var levelID = data.area + '-' + data.level
                    var classifID = data.area + '-' + data.level + '-' + data.classif

                    var arrayIDS = [areaID, levelID, classifID]
                    var arrayTypes = ['area', 'level', 'classif']

                    _.each(arrayIDS, function(idSlug, index) {
                        if(that.treeNodesObj[idSlug] == undefined) {

                            var parentID = 'root'
                            if(index > 0) parentID = arrayIDS[index-1]

                            var nodeObj = {
                                id:idSlug,
                                num:currentNum,
                                name:data[arrayTypes[index]],
                                type:arrayTypes[index],
                                parent: parentID
                            }
                            that.treeNodesObj[idSlug] = nodeObj
                            that.treeNodes.push(nodeObj)

                            if(arrayTypes[index] == 'level' || arrayTypes[index] == 'classif') {
                                that.treeLinks.push({
                                    source: that.treeNodesObj[nodeObj.parent].num,
                                    target: currentNum
                                })
                            } else{
                                that.treeLinks.push({
                                    source: 0,
                                    target: currentNum
                                })
                            }
                            currentNum += 1
                        }
                    })
                })

                console.log('treeNodesObj', that.treeNodesObj)
                console.log('treeNodes', that.treeNodes)
                console.log('treeLinks', that.treeLinks)

                console.log(JSON.stringify(that.treeNodes))
                console.log(JSON.stringify(that.treeLinks))
            });

            d3.json("/data/animate-force-data.json", function (error, graph) {
                that.jsonObject = JSON.parse(JSON.stringify(graph))
                if (error) throw error;
                that.graph = graph;
                console.log("network selector json", error, graph);
                that.simulation = d3.forceSimulation(that.graph.nodes)
                    .force("link", d3.forceLink(that.graph.links).strength(0.2).distance(50))
                    .force("charge", d3.forceManyBody())
                    .force("center", d3.forceCenter(that.settings.svgWigth / 2, that.settings.svgHeight / 2));
            });
        },
        computed: {
            nodes: function () {
                var that = this;
                console.log('computed nodes', that.graph)
                if (that.graph) {
                    var graphNode = d3.select("svg").append("g")
                            .attr("class", "nodes")
                            .selectAll("circle")
                            .data(that.graph.nodes)
                            .enter().append("circle")
                            .attr("r", function(d){
                                console.log('radius node', d)
                                if(d.type == "node") return 32
                                else if(d.type == "area") return 24
                                else if(d.type == "level") return 12
                                return 6
                            })
                            .attr("fill", function (d ,i) {
                                return that.color(i);
                            })
                            .call(d3.drag()
                                .on("start", function dragstarted(d) {
                                    if (!d3.event.active) that.simulation.alphaTarget(0.3).restart();
                                    d.fx = d.x;
                                    d.fy = d.y;
                                })
                                .on("drag", function dragged(d) {
                                    d.fx = d3.event.x;
                                    d.fy = d3.event.y;
                                })
                                .on("end", function dragended(d) {
                                    if (!d3.event.active) that.simulation.alphaTarget(0);
                                    d.fx = null;
                                    d.fy = null;
                                }));

                    return graphNode
                }
            },
            links: function () {
                var that = this;
                console.log('computed links', that.graph)
                if (that.graph) {
                    return d3.select("svg").append("g")
                    .attr("class", "links")
                    .selectAll("line")
                    .data(that.graph.links)
                    .enter().append("line")
                    .attr("stroke-width", function (d) { return 2; });
                }
            },
        },
        methods: {
            expandSelector: function () {
                this.$parent.selectorExpanded = 'network'
            },
            startSimulation: function () {
                console.log('in startSimulation')

                var that = this;
                console.log('updated', that.graph)
                if(that.graph !== null) {
                    console.log('nodes', that.graph.nodes)

                    setTimeout(function () {
                        that.simulation.nodes(that.graph.nodes).on('tick', function ticked() {
                            that.links
                                .attr("x1", function (d) { return d.source.x; })
                                .attr("y1", function (d) { return d.source.y; })
                                .attr("x2", function (d) { return d.target.x; })
                                .attr("y2", function (d) { return d.target.y; });

                            that.nodes
                                .attr("cx", function (d) { return d.x; })
                                .attr("cy", function (d) { return d.y; });
                        });
                    }, 10)
                }
            }
        },
         updated: function () {
            var that = this;
            console.log('updated', that.graph)
            if(that.graph !== null) {
                console.log('nodes', that.graph.nodes)
                that.startSimulation()

                setTimeout(function () {
                    that.simulation.nodes(that.graph.nodes).on('tick', function ticked() {
                        that.links
                            .attr("x1", function (d) { return d.source.x; })
                            .attr("y1", function (d) { return d.source.y; })
                            .attr("x2", function (d) { return d.target.x; })
                            .attr("y2", function (d) { return d.target.y; });

                        that.nodes
                            .attr("cx", function (d) { return d.x; })
                            .attr("cy", function (d) { return d.y; });
                    });
                }, 10)
            }
        }
    }
</script>

<style lang="scss">
    @import "~assets/scss/_variables.scss";
    @import "~assets/scss/_browsers.scss";

    .selector[data-selector="network"]{
        height: 527px;
        background: red;
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
                    font-size: 14px;
                    font-family: "montserratregular";
                }
            }
            .menu_categories{
                margin-top: 20px;
                text-align: left;
                .menu_category{
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
                .bolder{
                    font-weight: 700;
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
</style>
