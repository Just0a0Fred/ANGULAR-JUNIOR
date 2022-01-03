import { Component, Input, OnInit } from '@angular/core';
import { ICompany } from '../company';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {

  @Input() company!: ICompany;

  constructor() { }

  ngOnInit() {
  }

}
