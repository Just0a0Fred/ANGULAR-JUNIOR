import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ICompany } from './company';

@Injectable({
  providedIn: 'root'
})

export class CompaniesService {

  clicked_company!: ICompany;
  companies_data!: ICompany[];
  sort_type!: string;

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<ICompany[]>{
    if (!this.companies_data){
      return this.http.get<ICompany[]>("https://random-data-api.com/api/company/random_company?size=100");
    }
    return of(this.companies_data);
  }
}
