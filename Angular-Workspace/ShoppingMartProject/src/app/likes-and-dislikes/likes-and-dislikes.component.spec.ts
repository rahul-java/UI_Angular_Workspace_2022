import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesAndDislikesComponent } from './likes-and-dislikes.component';

describe('LikesAndDislikesComponent', () => {
  let component: LikesAndDislikesComponent;
  let fixture: ComponentFixture<LikesAndDislikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesAndDislikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikesAndDislikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
