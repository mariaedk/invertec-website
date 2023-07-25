import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

fdescribe('Testes para NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar a navbar', () => {
    expect(component).toBeTruthy();
  });

  it('deve ser responsivo com menu hamburger', () => {
    window.innerWidth = 800;

    component.responsiveNavbar();

    expect(component.responsive).toBeTrue();
  });

  it('não deve conter menu responsivo', () => {
    window.innerWidth = 1200;

    const responsiveLinks = document.getElementsByClassName('responsive-links')[0];
    const links = document.getElementsByClassName('hide-responsive-links')[0];
    
    expect(responsiveLinks).toBeUndefined();
    expect(links).toBeUndefined();
  });
});
