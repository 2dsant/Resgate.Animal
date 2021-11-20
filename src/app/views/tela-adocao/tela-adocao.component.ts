import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { listaAnimais } from 'src/assets/animais';
import { ModalAdocaoComponent } from '../modal-adocao/modal-adocao.component';

@Component({
  selector: 'app-tela-adocao',
  templateUrl: './tela-adocao.component.html',
  styleUrls: ['./tela-adocao.component.css']
})
export class TelaAdocaoComponent implements OnInit {

  public sexo = [
    {
      sexo: 'F', label: 'Feminino',
    },
    {
      sexo: 'M', label: 'Masculino'
    }]

  public tipAnimal = [
    {
      tipo: 1, animal: 'Cachorro',
    },
    {
      tipo: 2, animal: 'Gato'
    }]

  public tipPorte = [
    {
      tipo: 1, porte: 'Grande',
    },
    {
      tipo: 5, porte: 'Medio'
    },
    {
      tipo: 3, porte: 'Pequeno'
    }]

  porteSelecionado: any;
  tipoSelecionado: any;
  sexoSelecionado: any;

  listaAnimais = listaAnimais

  constructor(public dialog: MatDialog) { }

  openDialog(animal: any) {
    const dialogRef = this.dialog.open(ModalAdocaoComponent, {
      data: { animal },
    });
  }

  ngOnInit(): void {
  }

  filtro() {
    
    if (this.porteSelecionado) {

      this.listaAnimais = listaAnimais;

      this.listaAnimais = this.listaAnimais.filter((item) => {
        // if(this.porteSelecionado){
        return item.porte == this.porteSelecionado
        // }
      })
    }
  }

}
