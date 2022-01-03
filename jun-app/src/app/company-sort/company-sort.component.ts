import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../company';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent implements OnInit {

  @Output() inSelectBoxChange = new EventEmitter<any>();

  dropDownList = [{id: "business_name", name: "Названию"},
                  {id: "industry", name: "Виду деятельности"},
                  {id: "type", name: "Типу"}];
  sort_type!: string;

  constructor(private _companiesService: CompaniesService) { }

  ngOnInit(): void {
  }

  sendSort(e: any){
    this._companiesService.sort_type = e.target.value;
    this.inSelectBoxChange.emit();
  }

  sortOnChange(companies: ICompany[]) {
    this.sort_type = this._companiesService.sort_type;
    if (this.sort_type == "business_name") {
      return companies.sort((a, b) => ((a.suffix + a.business_name).toLocaleLowerCase() > (b.suffix + b.business_name).toLocaleLowerCase()) ? 1 : -1);
    } else if (this.sort_type == "type") {
      return companies.sort((a, b) => (a.type.toLocaleLowerCase() > b.type.toLocaleLowerCase()) ? 1 : -1);
    } else {
      return companies.sort((a, b) => (a.industry.toLocaleLowerCase() > b.industry.toLocaleLowerCase()) ? 1 : -1);
    }
  }
}
