import { Component, OnInit } from '@angular/core';
import { AuditHttpService } from '../utility/auditHttpService';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  cities: SelectItem[];
  citie: SelectItem[];
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
  preAuditRiskData: AuditHttpService;
  constructor(private auditHttpService: AuditHttpService) {

  }
  ngOnInit() {
    this.cities = [{ label: 'Health and family welfare', value: 'Health and family welfare' },
    { label: 'Health and ', value: 'Health and ' }
  ];
    this.citie = [{label: 'fef', value: 'fef'},
    {label: 'He', value: 'H'}
];
  this.riskCols = [
      { field: 'riskSubject', header: 'Risk' },
      { field: 'riskAmount', header: 'Amount' },
      { field: 'riskScore', header: 'Score' },
      { field: 'riskResourceName', header: 'Attached Resource' }
    ];
    this.auditHttpService.getService('./assets/jsons/riskontology.json').subscribe(data => {
      this.preAuditRiskData = data;
    });
    this.preAuditData = [
      {
        'category': 'Expenditure',
        'observation': 'observation1',
        'specificParameter': 'para 1',
        'response': 'Response1',
        'status': 'open',
        'nameofcontributer': 'name1',
        'dispatchdate':'27/05/2017',
        'responsedate' : '30/07/2017',
        'stage':'IR',

        'resourceFile': 'VLCData.csv'
      },

      {
        'category': 'Public Grievance',
        'observation': 'observation2',
        'specificParameter': 'para 2',
        'response': 'Response1',
        'status': 'on progress',
        'nameofcontributer': 'name4',
        'dispatchdate':'20/03/2017',
        'responsedate' : '5/04/2017',
        'resourceFile': 'Report1.csv',
        'stage':'Draft Para'
      },
    ];
  }
  updateRow(row) {
  }
  cancelUpdate(row) {

  }

}
