import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoapiComponent } from './consumoapi.component';

describe('ConsumoapiComponent', () => {
  let component: ConsumoapiComponent;
  let fixture: ComponentFixture<ConsumoapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumoapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
