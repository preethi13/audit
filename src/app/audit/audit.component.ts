import { Component, OnInit } from '@angular/core';
import { AuditHttpService } from '../utility/auditHttpService';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  preAuditDat: {
    "category": string;
    "observation": string;
    "specificParameter": string;
    "response": string;
    "status": string;
    "resourceFile": string;
  }[];
  riskCols: { field: string; header: string; }[];
  preAuditRiskData: AuditHttpService;
  constructor(private auditHttpService: AuditHttpService) {

  }
  ngOnInit() {
    this.riskCols = [
      { field: 'riskSubject', header: 'Risk' },
      { field: 'riskAmount', header: 'Amount' },
      { field: 'riskScore', header: 'Score' },
      { field: 'riskResourceName', header: 'Attached Resource' }
    ];
    this.auditHttpService.getService('./assets/jsons/riskontology.json').subscribe(data => {
      this.preAuditRiskData = data;
    });
    this.preAuditDat = [
      {
        "category": "Expenditure",
        "observation": "observation1",
        "specificParameter": "parameter1",
        "response": "GSA",
        "status": "open",

        "resourceFile": ""
      },

      {
        "category": "Public Grievance",
        "observation": "observation2",
        "specificParameter": "parameter2",
        "response": "GSA",
        "status": "on progress",
        "resourceFile": ""
      },
    ]
  }
  updateRow(row) {
  }
  cancelUpdate(row) {

  }

}
