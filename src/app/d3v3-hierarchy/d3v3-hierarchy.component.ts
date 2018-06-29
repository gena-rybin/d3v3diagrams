import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-d3v3-hierarchy',
  templateUrl: './d3v3-hierarchy.component.html',
  styleUrls: ['./d3v3-hierarchy.component.css']
})
export class D3v3HierarchyComponent implements OnInit {
  json_data = {
    'name': 'Coca-Cola',
    'children': [
      {
        'name': 'Smart One',
        'children': [
          {
            'name': 'Smart Two',
            'children': [
              {
                'name': 'NewsUK',
                'children': [
                  {'name': 'Media Type: TV UK', 'size': 3938},
                  {'name': 'Buy type: Spot', 'size': 3812},
                  {'name': 'Audience: Housepersons', 'size': 6714},
                  {'name': 'Daypart: Breakfast', 'size': 743},
                  {'name': 'Length: 30', 'size': 743}
                ]
              },
              {
                'name': 'Viacom',
                'children': [
                  {'name': 'Media type: Digital', 'size': 3938},
                  {'name': 'Buy type: Programmatic Guaranteed', 'size': 3812},
                  {'name': 'Media: mtv.com', 'size': 6714},
                  {'name': 'Sub media: Online video', 'size': 743},
                  {'name': 'Format: Full banner', 'size': 743},
                  {'name': 'Device: Personal computer', 'size': 743}
                ]
              }
            ]
          }
        ]
      },
      {
        'name': 'Smart Three',
        'children': [
          {
            'name': 'Viacom',
            'children': [
              {'name': 'Media type: Digital', 'size': 3938},
              {'name': 'Buy type: Programmatic PMP', 'size': 3812},
              {'name': 'Media: mtv.com', 'size': 6714},
              {'name': 'Sub media: Online video', 'size': 743},
              {'name': 'Format: Full banner', 'size': 743},
              {'name': 'Device: Personal computer', 'size': 743}
            ]
          }
        ]
      },
      {
        'name': 'HuffPost News',
        'children': [
          {'name': 'Media type: Digital', 'size': 17010},
          {'name': 'Buy type: Programmatic PMP', 'size': 5842},
          {'name': 'Media: huffintonpost.com', 'size': 17010},
          {'name': 'Sub media: Mobile video', 'size': 5842},
          {'name': 'Format: Half banner', 'size': 5842},
          {'name': 'Device: Mobile/Tablet', 'size': 5842}
        ]
      }
    ]
  };

  m = [];
  w: number;
  h: number;
  i = 0;
  root;
  tree;
  diagonal;
  vis;


  constructor() { }

  ngOnInit() {
    console.log(d3);

    this.m = [20, 120, 20, 20];
    this.w = 1200 - this.m[1] - this.m[3];
    this.h = 800 - this.m[0] - this.m[2];

    this.tree = d3.layout.tree()
      .size([this.h, this.w]);

    this.diagonal = d3.svg.diagonal()
      .projection(d => [d.y, d.x]);

    this.vis = d3.select('#body').append('svg:svg')
      .attr('width', this.w + this.m[1] + this.m[3])
      .attr('height', this.h + this.m[0] + this.m[2])
      .append('svg:g')
      .attr('transform', 'translate(' + this.m[3] + ',' + this.m[0] + ')');

    this.root = this.json_data;
    this.root.x0 = this.h / 2;
    this.root.y0 = 0;

    // Initialize the display to show a few nodes.
    // root.children.forEach(toggleAll);
    // toggle(root.children[1]);
    // toggle(root.children[1].children[2]);
    // toggle(root.children[9]);
    // toggle(root.children[9].children[0]);
    this.update(this.root);

  }



  toggleAll(d) {
    if (d.children) {
      d.children.forEach(this.toggleAll);
      this.toggle(d);
    }
  }



  update(source) {
    // const duration = d3.event && d3.event.altKey ? 5000 : 500;   //// !!!!!!!!!!!!!
    const duration = d3.event ? 1000 : 500;

    // Compute the new tree layout.
    const nodes = this.tree.nodes(this.root).reverse();

    // Normalize for fixed-depth.
    nodes.forEach(d => d.y = d.depth * 180);

    // Update the nodes…
    const node = this.vis.selectAll('g.node')
      .data(nodes, d => d.id || (d.id = ++this.i));   //// !!!!!!!!!!!!!
    // .data(nodes, function(d) { return d.id; });

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append('svg:g')
      .attr('class', 'node')
      .attr('transform', d => 'translate(' + source.y0 + ',' + source.x0 + ')')
      .on('click', d => { this.toggle(d); this.update(d); });

    nodeEnter.append('svg:circle')
      .attr('r', 1e-6)
      .style('fill', d => d._children ? 'lightsteelblue' : '#fff');

    nodeEnter.append('a')
      .attr('xlink:href', d => d.url)
      .append('svg:text')
      .attr('x', d => d.children || d._children ? -10 : 10)
      .attr('dy', '.35em')
      .attr('text-anchor', d => d.children || d._children ? 'end' : 'start')
      .text(d => d.name)
      .style('fill', d => d.free ? 'black' : '#999')
      .style('fill-opacity', 1e-6);

    nodeEnter.append('svg:title')
      .text(d => d.description);

    // Transition nodes to their new position.
    const nodeUpdate = node.transition()
      .duration(duration)
      .attr('transform', d => 'translate(' + d.y + ',' + d.x + ')');

    nodeUpdate.select('circle')
      .attr('r', 6)
      .style('fill', d => d._children ? 'lightsteelblue' : '#fff');

    nodeUpdate.select('text')
      .style('fill-opacity', 1);

    // Transition exiting nodes to the parent's new position.
    const nodeExit = node.exit().transition()
      .duration(duration)
      .attr('transform', d => 'translate(' + source.y + ',' + source.x + ')')
      .remove();

    nodeExit.select('circle')
      .attr('r', 1e-6);

    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // Update the links…
    const link = this.vis.selectAll('path.link')
      .data(this.tree.links(nodes), d => d.target.id);

    // Enter any new links at the parent's previous position.
    link.enter().insert('svg:path', 'g')
      .attr('class', 'link')
      .attr('d', d => {
        const o = {x: source.x0, y: source.y0};
        return this.diagonal({source: o, target: o});
      })
      .transition()
      .duration(duration)
      .attr('d', this.diagonal);

    // Transition links to their new position.
    link.transition()
      .duration(duration)
      .attr('d', this.diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
      .duration(duration)
      .attr('d', d => {
        const o = {x: source.x, y: source.y};
        return this.diagonal({source: o, target: o});
      })
      .remove();

    // Stash the old positions for transition.
    nodes.forEach(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

// Toggle children.
  toggle(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
  }
}
