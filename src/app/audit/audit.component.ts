import { Component, OnInit } from '@angular/core';
import { AuditHttpService } from '../utility/auditHttpService';
import { SelectItem } from 'primeng/api';
import { range } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  cities: SelectItem[];
  citie: SelectItem[];
  yearOptions: SelectItem[] = [];
  preAuditData: {
    'category': string;
    'observation': string;
    'specificParameter': string;
    'response': string;
    'status': string;
    'nameofcontributer': string;
    'dispatchdate': string;
    'responsedate': string;
    'resourceFile': string;
    'stage': string;
  }[];

  riskCols: { field: string; header: string; }[];
  postDeptCols: { field: string; header: string; }[];
  preAuditRiskData: AuditHttpService;
  rowGroupMetadata: {};
  postauditList =[];
  constructor(private auditHttpService: AuditHttpService) {

  }
  ngOnInit() {
    range(1992, 30).subscribe(data => {
      const yearArray: string[] = [];
      yearArray.push(data.toString());
      yearArray.forEach(element =>{
        this.yearOptions.push({label:element,value:element});
      });
    });
    this.cities = [{ label: 'Public Health and family welfare', value: 'Health and family welfare' },
    { label: 'Education', value: 'Education' }
    ];
    this.citie = [{ label: 'Arogra Kavacha', value: 'fef' },
    { label: 'Scheme 2', value: 'LB' }
    ];
    this.riskCols = [
      { field: 'riskSubject', header: 'Risk' },
      { field: 'riskAmount', header: 'Amount' },
      { field: 'riskScore', header: 'Score' },
      { field: 'riskResourceName', header: 'Attached Resource' }
    ];
    this.postDeptCols = [
      { field: 'department', header: 'Department' },
      { field: 'auditUnit', header: 'Audit Unit' },
      { field: 'jurisdiction', header: 'Jurisdiction' },
      { field: 'start', header: 'Year of Audit' },
      { field: 'period', header: 'Peiod of Audit' },
    ];
    this.auditHttpService.getService('./assets/jsons/riskontology.json').subscribe(data => {
      this.preAuditRiskData = data;
    });
    this.auditHttpService.getService('./assets/jsons/postaudit.json').subscribe(data => {
      this.preAuditData = data;
      this.updateRowGroupMetaData();
    });
    this.auditHttpService.getService('./assets/jsons/postauditDeptList.json').subscribe(data => {
      this.postauditList[0] = data[0];
    });

  }
  updateRow(row) {
  }
  cancelUpdate(row) {

  }
  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.preAuditData) {
      for (let i = 0; i < this.preAuditData.length; i++) {
        let rowData = this.preAuditData[i];
        let brand = rowData.observation;
        if (i == 0) {
          this.rowGroupMetadata[brand] = { index: 0, size: 1 };
        } else {
          let previousRowData = this.preAuditData[i - 1];
          let previousRowGroup = previousRowData.observation;
          if (brand === previousRowGroup){
            this.rowGroupMetadata[brand].size++;
          } else {
            this.rowGroupMetadata[brand] = { index: i, size: 1 };
          }
        }
      }
    }
  }

}
