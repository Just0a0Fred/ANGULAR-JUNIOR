import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit {

  formBusiness_name = new FormControl("");
  formType = new FormControl("");
  formIndustry = new FormControl("");

  uniqueTypes = ['Public Company', 'Nonprofit',
                 'Privately Held', 'Self-Employed',
                 'Educational Institution',
                 'Partnership',
                 'Government Agency',
                 'Sole Proprietorship'];  

  constructor(private _companiesService: CompaniesService) { }

  ngOnInit() {
  }

  setFilterInput() {
    console.log(Array.from(new Set(this._companiesService.companies_data.map(company => company.industry))))
    this._companiesService.filter_input = this.formBusiness_name.value;
  }

  setFilterType() {
    this._companiesService.filter_check_box = this.formType.value;
  }
}
