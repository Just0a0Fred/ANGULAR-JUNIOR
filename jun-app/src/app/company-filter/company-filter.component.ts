import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../company';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit {

  @Output() inFilterChanged = new EventEmitter<any>();
  @Output() sB1FilterChanged = new EventEmitter<any>();
  @Output() sB2FilterChanged = new EventEmitter<any>();

  formBusiness_name = new FormControl("");
  formType = new FormControl("");
  formIndustry = new FormControl("");

  uniqueTypes!: string[];
  uniqueIndustries!: string[];  

  constructor(private _companiesService: CompaniesService) { }

  ngOnInit() {
  }

  //Input work:
  sendFilterByInput(){
    this.inFilterChanged.emit();
  }

  filterByInput() {
    return this._companiesService.companies_data.filter(obj => 
      (obj.suffix + " \"" + obj.business_name + "\"").toLocaleLowerCase().includes(this.formBusiness_name.value.toLocaleLowerCase()));
  }

  //Select Box 1(TYPE) work:
  sendFilterByType(){
    this.sB1FilterChanged.emit();
  }

  filterBySelectBox1() {
    if (this.formType.value != ""){
      return this._companiesService.companies_data.filter(obj => 
        obj.type == this.formType.value);
    } else {
      return this._companiesService.companies_data
    }
  }

  //Select Box 2(INDUSTRY) work:
  sendFilterByIndustry(){
    this.sB2FilterChanged.emit();
  }

  filterBySelectBox2() {
    if (this.formIndustry.value != ""){
      return this._companiesService.companies_data.filter(obj => 
        obj.industry == this.formIndustry.value);
    } else {
      return this._companiesService.companies_data
    }
  }
}
