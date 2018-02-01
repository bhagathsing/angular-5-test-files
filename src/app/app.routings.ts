import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './common/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
export const AppRoutes = RouterModule.forRoot(routes, {useHash: true});
