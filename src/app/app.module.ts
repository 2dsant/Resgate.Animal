import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { DefaultComponent } from './layout/default/default.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroUsuarioComponent } from './views/cadastro-usuario/cadastro-usuario.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CadastroAnimalComponent } from './views/cadastro-animal/cadastro-animal.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { TelaAdocaoComponent } from './views/tela-adocao/tela-adocao.component';
import {MatCardModule} from '@angular/material/card';
import { ModalAdocaoComponent } from './views/modal-adocao/modal-adocao.component';
import { ModalConfirmacaoAdocaoComponent } from './views/modal-confirmacao-adocao/modal-confirmacao-adocao.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { DoarComponent } from './views/doar/doar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DefaultComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CadastroAnimalComponent,
    TelaAdocaoComponent,
    ModalAdocaoComponent,
    ModalConfirmacaoAdocaoComponent,
    SobreComponent,
    DoarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatSelectModule,
    HttpClientModule,
    IvyCarouselModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
