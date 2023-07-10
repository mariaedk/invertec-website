import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomacaoIndustrialComponent } from './automacao-industrial.component';

describe('AutomacaoIndustrialComponent', () => {
  let component: AutomacaoIndustrialComponent;
  let fixture: ComponentFixture<AutomacaoIndustrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomacaoIndustrialComponent]
    });
    fixture = TestBed.createComponent(AutomacaoIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
