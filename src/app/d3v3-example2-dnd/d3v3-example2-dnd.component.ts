import {Component, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as d3sankey from 'd3-sankey';

@Component({
  selector: 'app-d3v3-example2-dnd',
  templateUrl: './d3v3-example2-dnd.component.html',
  styleUrls: ['./d3v3-example2-dnd.component.css']
})
export class D3v3Example2DndComponent implements OnInit {

  @Input() jsonData: any;

  ngOnInit() {
    let units = 'Widgets';

    let margin = {top: 10, right: 10, bottom: 10, left: 10},
      width = 1200 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    let formatNumber = d3.format(',.0f'),    // zero decimal places
      format = function(d) { return formatNumber(d) + ' ' + units; },
      color = d3.scale.category20();

// append the svg canvas to the page
    let svg = d3.select('#chart').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')');

// Set the sankey diagram properties
    let sankey = d3sankey.sankey()
      .nodeWidth(36)
      .nodePadding(10)
      .size([width, height]);

    let path = sankey.link();

  // load the data
  //   d3.json(this.json_url, function(error, graph) {

      let nodeMap = {};
      this.jsonData.nodes.forEach(function(x: any) { nodeMap[x.name] = x; });
      this.jsonData.links = this.jsonData.links.map(function(x) {
        return {
          source: nodeMap[x.source],
          target: nodeMap[x.target],
          value: x.value
        };
      });

      sankey
        .nodes(this.jsonData.nodes)
        .links(this.jsonData.links)
        .layout(32);

// add in the links
      let link = svg.append('g').selectAll('.link')
        .data(this.jsonData.links)
        .enter().append('path')
        .attr('class', 'link')
        .attr('d', path)
        .style('stroke-width', function(d: any) { return Math.max(1, d.dy); })
        .sort(function(a: any, b: any) { return b.dy - a.dy; });

// add the link titles
      link.append('title')
        .text(function(d: any) {
          return d.source.name + ' → ' +
            d.target.name + '\n' + format(d.value); });

// add in the nodes
      let node = svg.append('g').selectAll('.node')
        .data(this.jsonData.nodes)
        .enter().append('g')
        .attr('class', 'node')
        .attr('transform', function(d: any) {
          return 'translate(' + d.x + ',' + d.y + ')'; })
        .call(d3.behavior.drag()
          .origin(function(d: any) { return d; })
          .on('dragstart', function() {
            this.parentNode.appendChild(this); })
          .on('drag', dragmove));

// add the rectangles for the nodes
      node.append('rect')
        .attr('height', function(d: any) { return d.dy; })
        .attr('width', sankey.nodeWidth())
        .style('fill', function(d: any) {
          return d.color = color(d.name.replace(/ .*/, '')); })
        // .style('stroke', function(d) {
        //   return d3.rgb(d.color).darker(2); })
        .append('title')
        .text(function(d: any) {
          return d.name + '\n' + format(d.value); });

// add in the title for the nodes
      node.append('text')
        .attr('x', -6)
        .attr('y', function(d: any) { return d.dy / 2; })
        .attr('dy', '.35em')
        .attr('text-anchor', 'end')
        .attr('transform', null)
        .text(function(d: any) { return d.name; })
        .filter(function(d: any) { return d.x < width / 2; })
        .attr('x', 6 + sankey.nodeWidth())
        .attr('text-anchor', 'start');

// the function for moving the nodes
      function dragmove(d: any) {
        d3.select(this).attr('transform',
          'translate(' + (
            d.x = Math.max(0, Math.min(width - d.dx, (<any>d3.event).x))
          ) + ',' + (
            d.y = Math.max(0, Math.min(height - d.dy, (<any>d3.event).y))
          ) + ')');
        sankey.relayout();
        link.attr('d', path);
      }
    // });
  }


}
