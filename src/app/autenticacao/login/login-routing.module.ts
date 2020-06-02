import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { LoginComponent, LogarComponent } from './components';

export const LoginRoutes: Routes = [
    {
        path: 'login',
        component: LogarComponent,
        children: [{path: '', component: LoginComponent}]

    }
];
@NgModule({
    // forChild modulo filho
    imports: [RouterModule.forChild(LoginRoutes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
}
