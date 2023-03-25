import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadImgComponent } from './head-img.component';

describe('HeadImgComponent', () => {
  let component: HeadImgComponent;
  let fixture: ComponentFixture<HeadImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
