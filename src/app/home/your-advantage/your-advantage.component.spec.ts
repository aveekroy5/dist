import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAdvantageComponent } from './your-advantage.component';

describe('YourAdvantageComponent', () => {
  let component: YourAdvantageComponent;
  let fixture: ComponentFixture<YourAdvantageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAdvantageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
