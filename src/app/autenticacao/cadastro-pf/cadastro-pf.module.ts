import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastroPfComponent, CadastrarPfComponent} from './components'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import { CadastroPfService} from './services'

@NgModule({
  declarations: [
    CadastroPfComponent,
    CadastrarPfComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule, 
    MatSnackBarModule,
    SharedModule,
    RouterModule 
  ],
  providers: [
    CadastroPfService
  ]
})
export class CadastroPfModule { }
