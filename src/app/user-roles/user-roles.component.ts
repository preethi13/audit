import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  permissions: SelectItem[];
  constructor() { }

  ngOnInit() {
    this.permissions=[{value:'insert',label:'Insert'},
    {value:'update',label:'Update'},
    {value:'delete',label:'Delete'},
    {value:'Read',label:'Read'}]
  }

}
