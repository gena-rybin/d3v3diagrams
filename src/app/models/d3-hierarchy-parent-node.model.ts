export interface D3HierarchyParentNodeInterface {

  children: Array<D3HierarchyParentNodeInterface>;
  depth: number;
  id: number;
  name: string;
  parent: D3HierarchyParentNodeInterface;
  x: number;
  x0: number;
  y: number;
  y0: number;
}

export class D3HierarchyParentNodeModel implements D3HierarchyParentNodeInterface {
  children = null;
  depth = undefined;
  id = undefined;
  name = '';
  parent = undefined;
  x = undefined;
  x0 = undefined;
  y = undefined;
  y0 = undefined;

  constructor(data?: D3HierarchyParentNodeInterface) {
    Object.assign(this, data);
  }
}
