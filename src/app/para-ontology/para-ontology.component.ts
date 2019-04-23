import { Component, OnInit } from '@angular/core';
import { AuditHttpService } from '../utility/auditHttpService';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-para-ontology',
  templateUrl: './para-ontology.component.html',
  styleUrls: ['./para-ontology.component.css'],
  providers:[MessageService]
})
export class ParaOntologyComponent implements OnInit {


  cols: { field: string; header: string; }[];
  risks: any;
  constructor(private auditHttpService: AuditHttpService,private messageService:MessageService) { }
  risk='';
  category:string;
  level:number;

  ngOnInit() {
    this.cols = [{ field: 'paraId', header: 'Observation ID' },
    { field: 'paraSubject', header: 'Description' },
  {field:'category',header:'Category'}];
    this.auditHttpService.getService('./assets/jsons/paraontology.json').subscribe(data => {
      this.risks = data;
    });
  }
  addNewRisk(risk,category) {
    this.risks.push({ paraId: Math.round(Math.random() * 100000), paraSubject: this.risk , category:this.category});
    this.messageService.add({severity:'success', summary: 'Success', detail:'Updated Successfully'});
    this.risk='';
    this.category='';
    this.level=null;
  }

}
