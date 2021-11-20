import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public form: FormGroup;
  public listUf = [
    { "nome": "Acre", "sigla": "AC" },
    { "nome": "Alagoas", "sigla": "AL" },
    { "nome": "Amapá", "sigla": "AP" },
    { "nome": "Amazonas", "sigla": "AM" },
    { "nome": "Bahia", "sigla": "BA" },
    { "nome": "Ceará", "sigla": "CE" },
    { "nome": "Distrito Federal", "sigla": "DF" },
    { "nome": "Espírito Santo", "sigla": "ES" },
    { "nome": "Goiás", "sigla": "GO" },
    { "nome": "Maranhão", "sigla": "MA" },
    { "nome": "Mato Grosso", "sigla": "MT" },
    { "nome": "Mato Grosso do Sul", "sigla": "MS" },
    { "nome": "Minas Gerais", "sigla": "MG" },
    { "nome": "Pará", "sigla": "PA" },
    { "nome": "Paraíba", "sigla": "PB" },
    { "nome": "Paraná", "sigla": "PR" },
    { "nome": "Pernambuco", "sigla": "PE" },
    { "nome": "Piauí", "sigla": "PI" },
    { "nome": "Rio de Janeiro", "sigla": "RJ" },
    { "nome": "Rio Grande do Norte", "sigla": "RN" },
    { "nome": "Rio Grande do Sul", "sigla": "RS" },
    { "nome": "Rondônia", "sigla": "RO" },
    { "nome": "Roraima", "sigla": "RR" },
    { "nome": "Santa Catarina", "sigla": "SC" },
    { "nome": "São Paulo", "sigla": "SP" },
    { "nome": "Sergipe", "sigla": "SE" },
    { "nome": "Tocantins", "sigla": "TO" }

  ];

  constructor(private formBuilder: FormBuilder, private usuarioService:UsuarioService) {

    this.form = this.formBuilder.group({
      usuario: this.formBuilder.group({
        email: [null, [Validators.email, Validators.required, Validators.maxLength(240), Validators.minLength(8)]],
        senha: [null, [Validators.required, Validators.maxLength(20), Validators.minLength(5)]],
        role: ["A"]
      }),
      pessoa: this.formBuilder.group({
        nome: [null, [Validators.required, Validators.maxLength(240), Validators.minLength(8)]],
        nascimento: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(10)]],
        cpf: [null, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
        sexo: [null, [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
        telefone: [null, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]]
      }),
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
        rua: [null, [Validators.required, Validators.maxLength(100)]],
        cidade: [null, [Validators.required, Validators.maxLength(100)]],
        uf: [null, [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
        pais: [null, [Validators.required, Validators.maxLength(100)]]
      })
    })

  }

  ngOnInit(): void {
  }

  salvaUsuario():void{
    alert("Cadastro efetuado");
    // }
  }

}
