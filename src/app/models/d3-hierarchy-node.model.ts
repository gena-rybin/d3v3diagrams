export interface D3HierarchyNodeInterface {

  children: Array<D3HierarchyNodeInterface>;
  depth: number;
  id: number;
  name: string;
  parent: D3HierarchyNodeInterface;
  x: number;
  x0: number;
  y: number;
  y0: number;
  _children: Array<D3HierarchyNodeInterface>;
}

export class D3HierarchyNodeModel implements D3HierarchyNodeInterface {
  children = null;
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
