import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdocaoComponent } from './modal-adocao.component';

describe('ModalAdocaoComponent', () => {
  let component: ModalAdocaoComponent;
  let fixture: ComponentFixture<ModalAdocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdocaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
