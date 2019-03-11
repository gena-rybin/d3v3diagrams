import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as d3 from 'd3';
import * as d3hierarchy from 'd3-hierarchy';
import {D3HierarchyNodeInterface} from '../models/d3-hierarchy-node.model';


@Component({
  selector: 'app-d3v3-example1',
  templateUrl: './d3v3-example1.component.html',
  styleUrls: ['./d3v3-example1.component.css']
})
export class D3v3Example1Component implements OnInit {
  // d3_data = {
  //   'name': 'Campaign1',
  //   'children': [
  //     {
  //       'name': 'Advertiser1',
  //       'children': [
  //         {
  //           'name': 'mediaOwner1',
  //           'children': [
  //             {
  //               'name': 'order1',
  //               'children': [
  //                 {
  //                   'name': 'Bookings',
  //                   'children': [
  //                     {
  //                       'name': 'booking1',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     },
  //                     {
  //                       'name': 'booking2',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Payment Conditions',
  //                   'children': [
  //                     {
  //                       'name': 'PC1',
  //                       'children': [
  //                         {
  //                           'name': 'attribute1:value1'
  //                         },
  //                         {
  //                           'name': 'attribute2:value2'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Allocation: 235 EUR'
  //                 }
  //               ]
  //             },
  //             {
  //               'name': 'order2',
  //               'children': [
  //                 {
  //                   'name': 'Bookings',
  //                   'children': [
  //                     {
  //                       'name': 'booking3',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     },
  //                     {
  //                       'name': 'booking4',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Payment Conditions',
  //                   'children': [
  //                     {
  //                       'name': 'PC1',
  //                       'children': [
  //                         {
  //                           'name': 'attribute1:value1'
  //                         },
  //                         {
  //                           'name': 'attribute2:value2'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Allocation: 235 EUR'
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       'name': 'Agency1',
  //       'children': [
  //         {
  //           'name': 'mediaOwner2',
  //           'children': [
  //             {
  //               'name': 'order3',
  //               'children': [
  //                 {
  //                   'name': 'Bookings',
  //                   'children': [
  //                     {
  //                       'name': 'booking1',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     },
  //                     {
  //                       'name': 'booking2',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Payment Conditions',
  //                   'children': [
  //                     {
  //                       'name': 'PC1',
  //                       'children': [
  //                         {
  //                           'name': 'attribute1:value1'
  //                         },
  //                         {
  //                           'name': 'attribute2:value2'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Allocation: 235 EUR'
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       'name': 'Agency2',
  //       'children': [
  //         {
  //           'name': 'mediaOwner3',
  //           'children': [
  //             {
  //               'name': 'order4',
  //               'children': [
  //                 {
  //                   'name': 'Bookings',
  //                   'children': [
  //                     {
  //                       'name': 'booking1',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     },
  //                     {
  //                       'name': 'booking2',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Payment Conditions',
  //                   'children': [
  //                     {
  //                       'name': 'PC1',
  //                       'children': [
  //                         {
  //                           'name': 'attribute1:value1'
  //                         },
  //                         {
  //                           'name': 'attribute2:value2'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Allocation: 235 EUR'
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       'name': 'Agency3',
  //       'children': [
  //         {
  //           'name': 'mediaOwner4',
  //           'children': [
  //             {
  //               'name': 'order5',
  //               'children': [
  //                 {
  //                   'name': 'Bookings',
  //                   'children': [
  //                     {
  //                       'name': 'booking1',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     },
  //                     {
  //                       'name': 'booking2',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Payment Conditions',
  //                   'children': [
  //                     {
  //                       'name': 'PC1',
  //                       'children': [
  //                         {
  //                           'name': 'attribute1:value1'
  //                         },
  //                         {
  //                           'name': 'attribute2:value2'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Allocation: 235 EUR'
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       'name': 'Agency4',
  //       'children': [
  //         {
  //           'name': 'mediaOwner5',
  //           'children': [
  //             {
  //               'name': 'order6',
  //               'children': [
  //                 {
  //                   'name': 'Bookings',
  //                   'children': [
  //                     {
  //                       'name': 'booking1',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     },
  //                     {
  //                       'name': 'booking2',
  //                       'children': [
  //                         {
  //                           'name': 'Submedia:None'
  //                         },
  //                         {
  //                           'name': 'BuyType:Direct'
  //                         },
  //                         {
  //                           'name': 'Date:01.01.2018-30.01.2018'
  //                         },
  //                         {
  //                           'name': 'Cost:3000'
  //                         },
  //                         {
  //                           'name': 'Currency:GBP'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Payment Conditions',
  //                   'children': [
  //                     {
  //                       'name': 'PC1',
  //                       'children': [
  //                         {
  //                           'name': 'attribute1:value1'
  //                         },
  //                         {
  //                           'name': 'attribute2:value2'
  //                         }
  //                       ]
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   'name': 'Allocation: 235 EUR'
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // };
  m = [];
  w: number;
  h: number;
  i = 0;
  root;
  tree;
  diagonal;
  vis;

  @Input() d3_data: any;
  @Input() set isChanged(data: boolean) {
    if (data) {
      this.update(this.root);
      console.log(this.root);
      // this.toggle(this.root.children[0].children[0]);
    } else {console.log(data); }
  }
  @Output() nodeClicked = new EventEmitter<D3HierarchyNodeInterface>();

  ngOnInit() {
    this.m = [10, 20, 10, 80];
    this.w = 1380 - this.m[1] - this.m[3];
    this.h = 600 - this.m[0] - this.m[2];

    this.tree = d3.layout.tree()
      .size([this.h, this.w]);

    this.diagonal = d3.svg.diagonal()
      .projection(d => [d.y, d.x]);

    this.vis = d3.select('#body').append('svg:svg')
      .attr('width', this.w + this.m[1] + this.m[3])
      .attr('height', this.h + this.m[0] + this.m[2])
      .append('svg:g')
      .attr('transform', 'translate(' + this.m[3] + ',' + this.m[0] + ')');

    this.root = this.d3_data;
    this.root.x0 = this.h / 2;
    this.root.y0 = 0;
    this.update(this.root);

    console.log(this.root);

    // INITIAL DISPLAY to show a few nodes.
    // this.root.children.forEach(this.toggleAll);
    // this.toggle(this.root.children[1]);
    // this.toggle(this.root.children[0]);
    // this.toggle(this.root.children[1].children[2]);
    // this.toggle(this.root.children[9]);

    this.toggle(this.root.children[1].children[0]);
    this.update(this.root);

  }

  toggleAll(d: any) {
    if (d) {
      if (d.children) {
        d.children.forEach(this.toggleAll);
        this.toggle(d);
      }
    }
  }

  update(source) {
    const duration = d3.event ? 1000 : 500;

    // Compute the new tree layout.
    const nodes = this.tree.nodes(this.root).reverse();

    // Normalize for fixed-depth.
    nodes.forEach(d => d.y = d.depth * 180);

    // Update the nodes…
    const node = this.vis.selectAll('g.node')
      .data(nodes, d => d.id || (d.id = ++this.i));

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append('svg:g')
      .attr('class', 'node')
      .attr('transform', d => 'translate(' + source.y0 + ',' + source.x0 + ')')
      .on('click', d => { this.onClicked(d); this.toggle(d); this.update(d);
        // const hierarchyOtherNode = this.root.descendants().find(ww => ww.data.id === d.id);
        const tree = d3hierarchy.hierarchy(this.root);
        console.log('----------');
        // console.log('descendants', tree.descendants());
        // console.log('ancestors', tree.ancestors());
        const leaves = tree.leaves();
        // console.log('leaves=nodes', leaves);
        const clickedLeaf = d.name;
        const nodeLeaf = leaves.filter(leaf => leaf.data.name === clickedLeaf)[0];
        const pathNodes = tree.path(nodeLeaf);
        const pathNames = [];
        const pathIndexes = [];
        pathNodes.forEach(p => pathNames.push(p.data.name));
        // pathNames.forEach()
        console.log('clickedLeaf', clickedLeaf);
        console.log('pathNames', pathNames);
        console.log('path from start to clicked node', pathNodes);
        const links = tree.links();
        console.log('all links', links);

        // console.log('path', tree.path(tree.leaves()[1]));
        // console.log('eachBefore', tree.eachBefore(t => console.log(t.data.name)));
        // console.log('eachAfter', tree.eachAfter(t => console.log(t.data.name)));

      });

    nodeEnter.append('svg:circle')
      .attr('r', 1e-6)
      .style('fill', d => d._children ? 'lightsteelblue' : '#fff');

    // nodeEnter.append('a')
    //   .attr('xlink:href', d => d.url)
    //   .append('svg:text')
    //   .attr('x', d => d.children || d._children ? -10 : 10)
    //   .attr('dy', '.35em')
    //   .attr('text-anchor', d => d.children || d._children ? 'end' : 'start')
    //   .text(d => d.name)
    //   .style('fill', d => d.free ? 'black' : '#999')
    //   .style('fill-opacity', 1e-6);
    nodeEnter.append('svg:text')
      .attr('x', d => d.children || d._children ? -10 : 10)
      .attr('dy', '.35em')
      .attr('text-anchor', d => d.children || d._children ? 'end' : 'start')
      .text(d => d.name)
      .style('fill-opacity', 1e-6);


    // Transition nodes to their new position.
    const nodeUpdate = node.transition()
      .duration(duration)
      .attr('transform', d => 'translate(' + d.y + ',' + d.x + ')');

    nodeUpdate.select('circle')
      .attr('r', 4.5)
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

    // NODE OPENING CLICK
    // Enter any new links at the parent's previous position.
    link.enter().insert('svg:path', 'g')
      .attr('class', 'link')
      .attr('d', d => {
        // console.log(d);
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

    // NODE CLOSING CLICK
    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
      .duration(duration)
      .attr('d', d => {
        // console.log(d);
        const o = {x: source.x, y: source.y};
        return this.diagonal({source: o, target: o});
      })
      .remove();

    // Stash the old positions for transition.
    nodes.forEach( d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // node.on('click', function(d) {
    //   console.log(d);
    // });
  }

  // Toggle children = OPEN / CLOSE NODE
  toggle(d: any) {
    if (d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    }
  }

  public onClicked(node: D3HierarchyNodeInterface) {
    // console.log('clicked--->', node);
    this.nodeClicked.emit(node);
  }

}
