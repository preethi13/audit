import { Component, OnInit } from '@angular/core';
import { AuditHttpService } from '../utility/auditHttpService';
import { getRandomString } from 'selenium-webdriver/safari';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-risk-ontology',
  templateUrl: './risk-ontology.component.html',
  styleUrls: ['./risk-ontology.component.css'],
  providers:[MessageService]
})
export class RiskOntologyComponent implements OnInit {

  cols: { field: string; header: string; }[];
  risks: any;
  score1: any;
  score2: any;
  score3: any;
  amount1: any;
  amount2: any;
  riskNewSubject: string;
  constructor(private auditHttpService: AuditHttpService, private messageService:MessageService) { }

  ngOnInit() {
    this.cols = [{ field: 'riskId', header: 'Risk ID' },
    { field: 'riskSubject', header: 'Risk Description' }];
    this.auditHttpService.getService('./assets/jsons/riskontology.json').subscribe(data => {
      this.risks = data;
    });
  }
  addNewRisk() {
    this.risks.push({ riskId: Math.round(Math.random() * 100000), riskSubject: this.riskNewSubject });
    this.messageService.add({severity:'success', summary: 'Success', detail:'Updated Successfully'});
    this.riskNewSubject='';
    this.score1 = null;
    this.score2 = null;
    this.score3=null;
    this.amount1=null;
    this.amount2=null;
  }

}
