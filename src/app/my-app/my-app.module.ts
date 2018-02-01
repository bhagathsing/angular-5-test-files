import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppComponent } from './my-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MyAppRoutes} from './my-app.routings';
import {NavComponent} from '../common/pages/nav/nav.component';
import {AppHeaderComponent} from '../common/pages/app-header/app-header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DynamicComponent } from './dynamic/dynamic.component';
import { GridComponent } from './grid/grid.component';
import { FiltersComponent } from './filters/filters.component';
import {PageNotFoundComponent} from '../common/pages/page-not-found/page-not-found.component';
import { DirectivesComponent } from './directives/directives.component';
import {IfElseDirective} from '../common/directives/if-else.directive';
import {ToggleInputDirective} from '../common/directives/toggle-input.directive';
import { BannerComponent } from './dynamic/banner/banner.component';
import { TabsComponent } from './dynamic/tabs/tabs.component';
import { OneBannerComponent } from './dynamic/banner/one-banner/one-banner.component';
import { TwoBannerComponent } from './dynamic/banner/two-banner/two-banner.component';
import { DragModalComponent } from './dynamic/drag-modal/drag-modal.component';
import { TestModalComponent } from './dynamic/test-modal/test-modal.component';
import { FooComponent } from './dynamic/test-modal/foo/foo.component';
import {TestService} from './dynamic/test-modal/test.service';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MyAppRoutes,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    MyAppComponent,
    DashboardComponent,
    NavComponent,
    AppHeaderComponent,
    DynamicComponent,
    GridComponent,
    FiltersComponent,
    PageNotFoundComponent,
    DirectivesComponent,
    IfElseDirective,
    ToggleInputDirective,
    BannerComponent,
    TabsComponent,
    OneBannerComponent,
    TwoBannerComponent,
    DragModalComponent,
    TestModalComponent,
    FooComponent
  ],
  exports: [
    PageNotFoundComponent
  ],
  providers: [
    TestService
  ],
  entryComponents: [
    DragModalComponent
  ]
})
export class MyAppModule { }
