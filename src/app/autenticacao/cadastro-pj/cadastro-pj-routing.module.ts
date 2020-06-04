import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import{ CadastroPjComponent, CadastrarPjComponent } from './components';
// CadastrarPjComponent serra as paginas
export const CadastroPjRoutes: Routes = [
    {
        path: "cadastrar-pj", 
        component: CadastroPjComponent, 
        // seu filhar é uma tela de cadastro
        children: [
            {
                path: '',
                component: CadastrarPjComponent  // definir que esse é o arquivo de tela exibição
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(CadastroPjRoutes)],
    exports: [RouterModule]
})
export class CadastroPjRoutingModule {

}
