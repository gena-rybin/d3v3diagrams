import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { D3v3HierarchyComponent } from './d3v3-hierarchy/d3v3-hierarchy.component';
import { D3v3CollapsibleTreeComponent } from './d3v3-collapsible-tree/d3v3-collapsible-tree.component';
import { D3v3Example1Component } from './d3v3-example1/d3v3-example1.component';
import { D3v3Example2Component } from './d3v3-example2/d3v3-example2.component';
import { D3v3Example2DndComponent } from './d3v3-example2-dnd/d3v3-example2-dnd.component';

@NgModule({
  declarations: [
    AppComponent,
    D3v3HierarchyComponent,
    D3v3CollapsibleTreeComponent,
    D3v3Example1Component,
    D3v3Example2Component,
    D3v3Example2DndComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
