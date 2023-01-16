import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvvmDemoComponent } from './mvvm-demo.component';

describe('MvvmDemoComponent', () => {
  let component: MvvmDemoComponent;
  let fixture: ComponentFixture<MvvmDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvvmDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvvmDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
