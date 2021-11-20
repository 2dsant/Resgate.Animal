import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacaoAdocaoComponent } from './modal-confirmacao-adocao.component';

describe('ModalConfirmacaoAdocaoComponent', () => {
  let component: ModalConfirmacaoAdocaoComponent;
  let fixture: ComponentFixture<ModalConfirmacaoAdocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmacaoAdocaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmacaoAdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
