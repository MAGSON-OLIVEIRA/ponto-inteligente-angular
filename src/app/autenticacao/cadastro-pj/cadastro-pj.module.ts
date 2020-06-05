import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import { CadastrarPjComponent, CadastroPjComponent} from './components';
import { CadastroPjService } from './services';

@NgModule({ 
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule, 
    MatSnackBarModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers:[
    CadastroPjService
  ]
})
export class CadastroPjModule { }
