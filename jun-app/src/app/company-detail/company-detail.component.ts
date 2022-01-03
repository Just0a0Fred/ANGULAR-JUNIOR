import { Component, Input, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../company';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  company!: ICompany;

  constructor(private _companiesService: CompaniesService,) { }

  ngOnInit() {
    this.company = this._companiesService.clicked_company;
  }

}
