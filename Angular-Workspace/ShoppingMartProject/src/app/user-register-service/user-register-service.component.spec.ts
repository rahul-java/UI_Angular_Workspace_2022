import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterServiceComponent } from './user-register-service.component';

describe('UserRegisterServiceComponent', () => {
  let component: UserRegisterServiceComponent;
  let fixture: ComponentFixture<UserRegisterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisterServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegisterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
