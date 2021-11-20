import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LoginComponent } from 'src/app/views/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logged: boolean;
  constructor(private dialog: MatDialog, private login: UsuarioService) {
    this.logged = Boolean(this.login.getLogin());
   }

  ngOnInit(): void {
  }

  loginModal(){
    const dialogRef = this.dialog.open(LoginComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }


}
