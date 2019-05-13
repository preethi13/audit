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
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
export class SplitButtonDemo implements OnInit {

  items: MenuItem[];
item: SelectItem[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
      this.items = [
          {label: 'Update', icon: 'pi pi-refresh', command: () => {
              this.update();
          }},
          {label: 'Delete', icon: 'pi pi-times', command: () => {
              this.delete();
          }},
          {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
          {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
      ];
  }

  save(severity: string) {
      this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
  }

  update() {
      this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
      this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
  }

}
