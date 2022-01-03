import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent implements OnInit {

  dropDownList = [{id: "business_name", name: "Названию"},
                  {id: "industry", name: "Виду деятельности"},
                  {id: "type", name: "Типу"}];

  constructor(private _companiesService: CompaniesService) { }

  ngOnInit(): void {
  }

  onClickList(e: any){
    this._companiesService.sort_type = e.target.value;
  }
}
