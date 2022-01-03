import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  sort_type!: string;

  public companies: ICompany[] = [];

  constructor(private _companiesService: CompaniesService, private router: Router) { }

  ngOnInit() {
    this._companiesService.getCompanies().subscribe(data => {this.companies = data; this._companiesService.companies_data = data});
  }

  onSelect(company: ICompany){
    this.router.navigate(['/detail', company.id]);
    this._companiesService.clicked_company = company;
  }

  //Сортировка company-sort
  sortOnChange() {
    this.sort_type = this._companiesService.sort_type;
    if (this.sort_type == "business_name") {
      this.companies = this.companies.sort((a, b) => (a.suffix + a.business_name > b.suffix + b.business_name) ? 1 : -1);
    } else if (this.sort_type == "type") {
      this.companies = this.companies.sort((a, b) => (a.type > b.type) ? 1 : -1);
    } else {
      this.companies = this.companies.sort((a, b) => (a.industry > b.industry) ? 1 : -1);
    }
  }

  //Фильтрация company-filter
  filterByInput() {
    this.companies = this._companiesService.companies_data.filter(obj => 
      (obj.suffix + " \"" + obj.business_name + "\"").toLocaleLowerCase().includes(this._companiesService.filter_input.toLocaleLowerCase()));
  }

  filterByCheckBox() {
    if (this._companiesService.filter_check_box != ""){
      this.companies = this._companiesService.companies_data.filter(obj => 
        obj.type == this._companiesService.filter_check_box);
    } else {
      this.companies = this._companiesService.companies_data
    }
  }
}
