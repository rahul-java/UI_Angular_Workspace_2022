import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDirectiveContainersComponent } from './ng-if-directive-containers.component';

describe('NgIfDirectiveContainersComponent', () => {
  let component: NgIfDirectiveContainersComponent;
  let fixture: ComponentFixture<NgIfDirectiveContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfDirectiveContainersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfDirectiveContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
