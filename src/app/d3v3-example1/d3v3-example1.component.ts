import {Component, Input, OnInit} from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-d3v3-example1',
  templateUrl: './d3v3-example1.component.html',
  styleUrls: ['./d3v3-example1.component.css']
})
export class D3v3Example1Component implements OnInit {
  // json_data = {
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

  @Input() json_data: any;


  ngOnInit() {
    this.m = [10, 100, 10, 100];
    this.w = 1380 - this.m[1] - this.m[3];
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
    this.update(this.root);

    console.log(this.root);

//     d3.json('../../assets/json/example1.json', json => {
//       // this.root = json;
//       // this.root.x0 = this.h / 2;
//       // this.root.y0 = 0;
//
//       // function toggleAll(d) {
//       //   if (d.children) {
//       //     d.children.forEach(toggleAll);
//       //     toggle(d);
//       //   }
//       // }
//
//       // Initialize the display to show a few nodes.
//       // root.children.forEach(toggleAll);
// //   toggle(root.children[1]);
// //   toggle(root.children[1].children[2]);
// //   toggle(root.children[9]);
// //   toggle(root.children[9].children[0]);
// //       this.update(this.root);
//     });

  }

  toggleAll(d: any) {
    if (d.children) {
      d.children.forEach(this.toggleAll);
      this.toggle(d);
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
      .on('click', d => { this.toggle(d); this.update(d); });

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
    nodes.forEach( d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  // Toggle children.
  toggle(d: any) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
  }

}
