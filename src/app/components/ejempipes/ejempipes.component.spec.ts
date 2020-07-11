import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjempipesComponent } from './ejempipes.component';

describe('EjempipesComponent', () => {
  let component: EjempipesComponent;
  let fixture: ComponentFixture<EjempipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjempipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjempipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
