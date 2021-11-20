import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAdocaoComponent } from './tela-adocao.component';

describe('TelaAdocaoComponent', () => {
  let component: TelaAdocaoComponent;
  let fixture: ComponentFixture<TelaAdocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaAdocaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
