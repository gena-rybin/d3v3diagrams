import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3v3CollapsibleTreeComponent } from './d3v3-collapsible-tree.component';

describe('D3v3CollapsibleTreeComponent', () => {
  let component: D3v3CollapsibleTreeComponent;
  let fixture: ComponentFixture<D3v3CollapsibleTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3v3CollapsibleTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3v3CollapsibleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
