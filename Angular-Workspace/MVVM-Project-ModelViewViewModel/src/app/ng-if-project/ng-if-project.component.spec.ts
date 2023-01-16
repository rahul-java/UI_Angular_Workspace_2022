import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfProjectComponent } from './ng-if-project.component';

describe('NgIfProjectComponent', () => {
  let component: NgIfProjectComponent;
  let fixture: ComponentFixture<NgIfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
