import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3v3HierarchyComponent } from './d3v3-hierarchy.component';

describe('D3v3HierarchyComponent', () => {
  let component: D3v3HierarchyComponent;
  let fixture: ComponentFixture<D3v3HierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3v3HierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3v3HierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
