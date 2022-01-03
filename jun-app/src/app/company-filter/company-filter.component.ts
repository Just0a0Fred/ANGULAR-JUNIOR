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

  ourFiteredCompanies!: ICompany[];

  constructor(private _companiesService: CompaniesService) { }

  ngOnInit() {
  }

  //Input work:
  sendFilterByInput(){
    this.inFilterChanged.emit();
  }

  //Select Box 1(TYPE) work:
  sendFilterByType(){
    this.sB1FilterChanged.emit();
  }

  //Select Box 2(INDUSTRY) work:
  sendFilterByIndustry(){
    this.sB2FilterChanged.emit();
  }

  filter(){
    this.ourFiteredCompanies = this._companiesService.companies_data.filter(obj => 
      (obj.suffix + " \"" + obj.business_name + "\"").toLocaleLowerCase().includes(this.formBusiness_name.value.toLocaleLowerCase()));

    if (this.formIndustry.value != ""){
      this.ourFiteredCompanies = this.ourFiteredCompanies.filter(obj => 
        obj.industry == this.formIndustry.value);
    };

    if (this.formType.value != ""){
      this.ourFiteredCompanies = this.ourFiteredCompanies.filter(obj => 
        obj.type == this.formType.value);
    };

    return this.ourFiteredCompanies;
  }
}
