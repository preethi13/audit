import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
import { AuditHttpService } from '../utility/auditHttpService';
@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})

export class AdddepartmentComponent implements OnInit {
  selecthead: SelectItem[];
  items: MenuItem[];
item: SelectItem[];
selectlocation: SelectItem[];
values: string[];
classification: SelectItem[];
  memData: any;
  memCols: { field: string; header: string; }[];


  constructor(private auditHttpService: AuditHttpService, ) {}

  ngOnInit() {
    
    this.auditHttpService.getService('./assets/jsons/memdata.json').subscribe(data =>{
      this.memData=data;
    });
    this.memCols=[{field:'name',header:'Name'},
    {field:'post',header:'Designation'},
    {field:'role',header:'Name'},
    {field:'reportsTo',header:'Reports To'},
    {field:'period',header:'Period'},
    {field:'phone',header:'Phone'},
    {field:'mail',header:'Email'}
  ]

      this.selecthead = [{ label: 'Head of', value: 'Head of' },
      { label: 'Sub-Organization of', value: 'Sub-Organization of' },
      { label: 'Linked to', value: 'Linked to' }
      ];
      this.selectlocation = [{label: 'Has site', value: 'Has site' },
      { label: 'Primarily based at', value: 'Primarily based at' },
      { label: 'Head Reg at', value: 'Head Reg at' }
      ];
      this.classification = [{label: 'Audit unit', value: 'Audit unit' },
       { label: 'Department', value: 'Department' },
       { label: 'Head Reg at', value: 'Head Reg at' }
       ];
      
      
      }
    }

