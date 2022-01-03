import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../company';
import { CompanyFilterComponent } from '../company-filter/company-filter.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  @ViewChild(CompanyFilterComponent) filter!: CompanyFilterComponent;

  sort_type!: string;

  public companies: ICompany[] = [];

  constructor(private _companiesService: CompaniesService, private router: Router) { }

  ngOnInit() {
    this._companiesService.getCompanies().subscribe(data => {this.companies = data; this._companiesService.companies_data = data; this.sendTypesAndIndustries(data);});
  }

  sendTypesAndIndustries(data: ICompany[]){
    this.filter.uniqueTypes = Array.from(new Set(data.map(obj => obj.type)));
    this.filter.uniqueIndustries = Array.from(new Set(data.map(obj => obj.industry)));
  }

  onSelect(company: ICompany){
    this.router.navigate(['/detail', company.id]);
    this._companiesService.clicked_company = company;
  }

  //Сортировка company-sort
  sortOnChange() {
    this.sort_type = this._companiesService.sort_type;
    if (this.sort_type == "business_name") {
      this.companies.sort((a, b) => ((a.suffix + a.business_name).toLocaleLowerCase() > (b.suffix + b.business_name).toLocaleLowerCase()) ? 1 : -1);
    } else if (this.sort_type == "type") {
      this.companies.sort((a, b) => (a.type.toLocaleLowerCase() > b.type.toLocaleLowerCase()) ? 1 : -1);
    } else {
      this.companies.sort((a, b) => (a.industry.toLocaleLowerCase() > b.industry.toLocaleLowerCase()) ? 1 : -1);
    }
  }

  inputChange(){
    this.companies = this.filter.filterByInput();
    this.sortOnChange();
  }

  sB1Changed(){
    this.companies = this.filter.filterBySelectBox1();
    this.sortOnChange();
  }

  sB2Changed(){
    this.companies = this.filter.filterBySelectBox2();
    this.sortOnChange();
  }
}
