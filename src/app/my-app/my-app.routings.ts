import {RouterModule, Routes} from '@angular/router';
import {MyAppComponent} from './my-app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {GridComponent} from './grid/grid.component';
import {FiltersComponent} from './filters/filters.component';
import {PageNotFoundComponent} from '../common/pages/page-not-found/page-not-found.component';
import {DirectivesComponent} from './directives/directives.component';
import {BannerComponent} from './dynamic/banner/banner.component';
import {TabsComponent} from './dynamic/tabs/tabs.component';
import {TestModalComponent} from './dynamic/test-modal/test-modal.component';

const routes: Routes = [
  {path: 'app', component: MyAppComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'dynamic-component', component: DynamicComponent, children:[
          {path: '', component: BannerComponent},
          {path: 'tabs', component: TabsComponent},
          {path: 'test-modal', component: TestModalComponent},
          {path: '', redirectTo: '/', pathMatch: 'full'},
       ]},
      {path: 'directives', component: DirectivesComponent},
      {path: 'grid', component: GridComponent},
      {path: 'filters', component: FiltersComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
  ]},
];
export const MyAppRoutes = RouterModule.forChild(routes);
