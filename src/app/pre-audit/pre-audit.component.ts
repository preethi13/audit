import { Component, OnInit } from '@angular/core';
import { AuditHttpService } from '../utility/auditHttpService';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
import { RiskOntologyComponent } from '../risk-ontology/risk-ontology.component';

@Component({
  selector: 'app-pre-audit',
  templateUrl: './pre-audit.component.html',
  styleUrls: ['./pre-audit.component.css'],
  providers: [MessageService]
})
export class PreAuditComponent implements OnInit {
  preAuditData: any;
  cols: { field: string; header: string; }[];
  riskCols: { field: string; header: string; }[];
  currentRisk = { riskSubject: '', riskScore: '', riskAmount: '', riskResourceName: '' };
  preAuditRiskData: any[];
  currentFileUpload: any;
  risks: SelectItem[];
  clonedAudit: { [s: string]: any; } = {};
  showTable = false;
  displayDialog: boolean;
  riskedit = {};
  selectedCar:any
  preAuditRiskDummyData: any;

  constructor(private auditHttpService: AuditHttpService, private messageService:MessageService) { }

  ngOnInit() {
    this.cols = [
      { field: 'department', header: 'Department' },
      { field: 'category', header: 'Category' },
      { field: 'temporal?.start', header: 'From-To' },
      { field: 'riskScore', header: 'Risk Score' },
      { field: 'isSelected', header: 'Selected for Audit?' }
    ];
    this.riskCols = [
      { field: 'riskSubject', header: 'Risk' },
      { field: 'riskAmount', header: 'Amount' },
      { field: 'riskScore', header: 'Score' },
      { field: 'riskResourceName', header: 'Attached Resource' }
    ];
    this.preAuditRiskData = [];
    this.risks = [{ label: 'Risk 1', value: 'Risk1' },
    { label: 'Risk 2', value: 'Risk2' },
    { label: 'Risk 3', value: 'Risk3' }];
    this.auditHttpService.getService('./assets/jsons/preaudit.json').subscribe(data => {
      this.preAuditData = data;
    });
    this.auditHttpService.getService('./assets/jsons/riskontology.json').subscribe(data=>{
      this.preAuditRiskDummyData = data;
    });
    
  }
  onTabChange(event) {
  }
  selectFile(event) {
    this.currentFileUpload = event.target.files[0];
    this.currentRisk.riskResourceName = this.currentFileUpload.name;
  }
  addRisk(risk) {
    this.preAuditRiskData.push(risk);
    this.currentRisk = { riskSubject: '', riskScore: '', riskAmount: '', riskResourceName: '' };
  }
  cancel(risk) {
    this.currentRisk = { riskSubject: '', riskScore: '', riskAmount: '', riskResourceName: '' };
  }


  onRowEditInit(car: any) {
    this.clonedAudit[car.department] = {...car};
}

onRowEditSave(car: any) {
    if (car.year > 0) {
        delete this.clonedAudit[car.department];
        this.messageService.add({severity:'success', summary: 'Success', detail:'Updated Successfully'});
    }
    else {
         this.messageService.add({severity:'error', summary: 'Error', detail:'Year is required'});
    }
}

onRowEditCancel(car: any, index: number) {
    this.preAuditData[index] = this.clonedAudit[car.department];
    delete this.clonedAudit[car.department];
}

showTableData(){
  this.showTable = true;
}


showDialogToAdd(row) {
  this.riskedit = row;
  this.displayDialog = true;
}

save() {
  let cars = [...this.preAuditRiskDummyData];

  cars[this.preAuditRiskDummyData.indexOf(this.selectedCar)] = this.riskedit;

  this.preAuditRiskDummyData = cars;
  this.riskedit = null;
  this.displayDialog = false;
  this.messageService.add({severity:'success', summary: 'Success', detail:'Updated Successfully'});
}

delete() {
  if(confirm('Are you sure to delete the selected risk? ')){
  let index = this.preAuditRiskDummyData.indexOf(this.selectedCar);
  this.preAuditRiskDummyData = this.preAuditRiskDummyData.filter((val, i) => i != index);
  this.riskedit = null;}
  this.displayDialog = false;

}

onRowSelect(event) {
  this.riskedit = this.cloneCar(event.data);
  this.displayDialog = true;
}

cloneCar(c) {
  let car = {};
  for (let prop in c) {
      car[prop] = c[prop];
  }
  return car;
}

AddPreAudit() {
  this.messageService.add({severity:'success', summary: 'Success', detail:'Updated Successfully'});
}
}
