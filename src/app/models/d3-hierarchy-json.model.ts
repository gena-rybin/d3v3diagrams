export class D3HierarchyJsonModel {
  name: string;
  children: Array<D3HierarchyJsonModel>;

  constructor(name: string,
              children: Array<D3HierarchyJsonModel>
  ) {

    this.name = name;
    this.children = children;
  }
}
