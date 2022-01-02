import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companies: ICompany[] = [];

  constructor(private _companiesService: CompaniesService) { }

  ngOnInit() {
    this._companiesService.getCompanies().subscribe(data => this.companies = data);
  }

}
