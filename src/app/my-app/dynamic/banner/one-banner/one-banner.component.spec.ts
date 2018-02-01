import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBannerComponent } from './one-banner.component';

describe('OneBannerComponent', () => {
  let component: OneBannerComponent;
  let fixture: ComponentFixture<OneBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
