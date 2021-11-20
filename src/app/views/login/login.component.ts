import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private loginService: UsuarioService) {

    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      senha: [null, [Validators.required]],
    })

   }

  ngOnInit(): void {
  }

  login() {
    this.loginService.setLogin(true);
    this.closeModal();
  }

  closeModal() {
    this.dialog.closeAll();
    document.location.reload();
  }
}
