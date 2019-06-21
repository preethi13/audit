import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AuditHttpService } from '../utility/auditHttpService';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DepartmentVO } from './department.model';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css'],
  providers: [MessageService]
})
export class AdddepartmentComponent implements OnInit {

  department: DepartmentVO;
  organizationlevel: SelectItem[];
  openaudit: boolean;
  openscheme: boolean;
  schemeCols: { field: string; header: string; }[];
  schemeOptions: SelectItem[];
  postCols: { field: string; header: string; }[];
  subUnitCols: { field: string; header: string; }[];

  showdialog: boolean;
  deptList = [];
  brand: string;
  filteredDepts = [];
  selectedDept = {};
  enableEdit: boolean;

  constructor(private auditHttpService: AuditHttpService, private messageService: MessageService) { }

  ngOnInit() {

    this.resetDepartment();

    this.auditHttpService.getService('/myapp/deptlist').subscribe(data => {
      this.deptList = data;
    },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Department List fetch failure.Please try later.' });
      });

    this.organizationlevel = [
      { label: 'Apex', value: 'Apex' },
      { label: ' Audit Unit', value: 'Audit Unit' },
      { label: 'Implementing Unit', value: 'Implementing Unit' }
    ];
    this.schemeCols = [
      { field: 'nameofscheme', header: 'Name of Scheme' },
      { field: 'startdate', header: 'Start Date' },
      { field: 'enddate', header: 'End Date' }
    ];
    this.postCols = [
      { field: 'postName', header: 'Post' },
      { field: 'description', header: 'Description' },
      { field: 'email', header: 'Email' }
    ];
    this.subUnitCols = [
      { field: 'unitName', header: ' Unit Name' },
      { field: 'unitId', header: 'Unit ID' },
      { field: 'altUnitName', header: 'Additional Unit Name' },
      { field: 'location', header: ' Location' },
      { field: 'email', header: 'Email' },
      { field: 'linkedTo', header: 'Linked to' }
    ];
    this.schemeOptions = [{ label: 'Universal Health Coverage', value: 'Universal Health Coverage' },
    { label: ' Expansion of Namma Metro', value: 'Expansion of Namma Metro' }];
  }

  addNewPost() {
    this.department.posts.push({ postName: '', description: '', email: ' ' });
  }

  addNewUnit() {
    this.department.units.push({ unitName: '', unitId: '', altUnitName: '', location: '', email: '', linkedTo: '' });
  }

  addNewScheme() {
    this.department.schemes.push({ schemeName: '', startDate: '', endDate: '' });
  }

  openAudit() {
    console.log('in open audit');
    this.openaudit = this.openaudit === true ? false : true;
  }
  openScheme() {
    console.log('in open scheme');
    this.openscheme = this.openscheme === true ? false : true;
  }

  addorUpdateDepartment() {
    console.log('department', this.department);
    this.auditHttpService.httpPostService('/myapp/org', this.department).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Created Successfully' });
      this.resetDepartment();
    },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Creation Failue. Please try later.' });
      }
    );
  }

  resetDepartment() {
    this.department = {
      name: '',
      id: '',
      code: '',
      altname: '',
      subjectMatter: '',
      location: '',
      url: '',
      phone: '',
      mail: '',
      pincode: null,
      address: '',
      level: '',
      schemes: [],
      posts: [],
      units: []
    };
  }

  filterDepts(event) {
    this.filteredDepts = [];
    for (let i = 0; i < this.deptList.length; i++) {
      const dept = this.deptList[i].name;
      if (dept.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredDepts.push(dept);
      }
    }
  }

  getDepartmentDetails() {
    console.log(this.department.name);
    this.enableEdit = true;
    this.auditHttpService.getService('/assets/jsons/deptDetail.json').subscribe(data => {
      this.department = data;
    });
  }

}
