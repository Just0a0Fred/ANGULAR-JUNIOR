import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent},
  {path: 'list', component: CompanyListComponent},
  {path: 'detail', component: CompanyDetailComponent},
  {path: 'map', component: CompanyYandexMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
