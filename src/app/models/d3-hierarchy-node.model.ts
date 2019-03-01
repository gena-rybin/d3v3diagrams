import {D3HierarchyParentNodeInterface} from './d3-hierarchy-parent-node.model';

export interface D3HierarchyNodeInterface {

  depth: number;
  id: number;
  name: string;
  parent: D3HierarchyParentNodeInterface;
  x: number;
  x0: number;
  y: number;
  y0: number;
  _children: Array<D3HierarchyParentNodeInterface>;
}

export class D3HierarchyNodeModel implements D3HierarchyNodeInterface {
  depth = undefined;
  id = undefined;
  name = '';
  parent = undefined;
  x = undefined;
  x0 = undefined;
  y = undefined;
  y0 = undefined;
  _children = null;

  constructor(data?: D3HierarchyNodeInterface) {
    Object.assign(this, data);
  }
}
