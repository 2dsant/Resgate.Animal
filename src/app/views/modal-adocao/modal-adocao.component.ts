import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalConfirmacaoAdocaoComponent } from '../modal-confirmacao-adocao/modal-confirmacao-adocao.component';

@Component({
  selector: 'app-modal-adocao',
  templateUrl: './modal-adocao.component.html',
  styleUrls: ['./modal-adocao.component.css']
})
export class ModalAdocaoComponent implements OnInit {

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  adotarModal(){
    const dialogRef = this.dialog.open(ModalConfirmacaoAdocaoComponent);
  }
}
