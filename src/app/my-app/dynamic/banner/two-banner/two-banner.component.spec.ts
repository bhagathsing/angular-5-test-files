import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBannerComponent } from './two-banner.component';

describe('TwoBannerComponent', () => {
  let component: TwoBannerComponent;
  let fixture: ComponentFixture<TwoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
