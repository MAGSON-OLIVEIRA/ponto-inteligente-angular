import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastroPfComponent, CadastrarPfComponent} from './components'

@NgModule({
  declarations: [
    CadastroPfComponent,
    CadastrarPfComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule 
  ]
})
export class CadastroPfModule { }
