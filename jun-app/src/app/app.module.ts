import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { LayoutComponent } from './layout/layout.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompaniesService } from './companies.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyFilterComponent } from './company-filter/company-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    LayoutComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
