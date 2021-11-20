import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { CadastroUsuarioComponent } from './views/cadastro-usuario/cadastro-usuario.component';
import { DoarComponent } from './views/doar/doar.component';
import { HomeComponent } from './views/home/home.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { TelaAdocaoComponent } from './views/tela-adocao/tela-adocao.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent
      },
      {
        path: 'adocao',
        component: TelaAdocaoComponent
      },
      {
        path: 'OProjeto',
        component: SobreComponent
      },
      {
        path: 'doar',
        component: DoarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
