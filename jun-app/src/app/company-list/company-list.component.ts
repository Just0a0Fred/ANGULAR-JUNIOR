import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../company';
import { CompanyFilterComponent } from '../company-filter/company-filter.component';
import { CompanySortComponent } from '../company-sort/company-sort.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  @ViewChild(CompanyFilterComponent) filter!: CompanyFilterComponent;
  @ViewChild(CompanySortComponent) sorter!: CompanySortComponent;

  sort_type!: string;

  public companies: ICompany[] = [];

  constructor(private _companiesService: CompaniesService, private router: Router) { }

  ngOnInit() {
    this._companiesService.getCompanies().subscribe(data => {this.companies = data; this._companiesService.companies_data = data; this.sendTypesAndIndustries(data);});
  }

  sendTypesAndIndustries(data: ICompany[]){
    this.filter.uniqueTypes = Array.from(new Set(data.map(obj => obj.type)))
    .sort((a, b) => (a.toLocaleLowerCase() > b.toLocaleLowerCase()) ? 1 : -1);
    this.filter.uniqueIndustries = Array.from(new Set(data.map(obj => obj.industry)))
    .sort((a, b) => (a.toLocaleLowerCase() > b.toLocaleLowerCase()) ? 1 : -1);
  }

  onSelect(company: ICompany){
    this.router.navigate(['/detail', company.id]);
    this._companiesService.clicked_company = company;
  }

  sort() {
    this.sorter.sortOnChange(this.companies);
  }

  filterData(){
    this.companies = this.filter.filter();
    this.sort();
  }
}
