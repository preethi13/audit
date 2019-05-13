import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  label: string;
  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Audit Components',
      icon: 'fa fa-database',
      items: [
        {
          label: 'Risk-Assessment', icon: 'fa fa-eye', command: (event) => {
            this.label = event.item.label;
            console.log('label', this.label);
          }, routerLink: ['/menu/riskassessment']
        },
        {
          label: 'Audit-Planning', icon: 'fa fa-eye', command: (event) => {
            this.label = event.item.label;
            console.log('label', this.label);
          }, routerLink: ['/menu/auditexecution']
        },
        
          {
          label: 'Audit', icon: 'fa fa-plus', command: (event) => {
            this.label = event.item.label;
            console.log('label', this.label);
          }, routerLink: ['/menu/audit']
        }
      ]
    },
    {
      label: 'Ontology',
      icon: 'fa fa-database',
      items: [
        {
          label: 'Risk', icon: 'fa fa-eye', command: (event) => {
            this.label = event.item.label;
            console.log('label', this.label);
          }, routerLink: ['/menu/riskontology']
        },
        {
          label: 'Audit-Observation', icon: 'fa fa-plus', command: (event) => {
            this.label = event.item.label;
            console.log('label', this.label);
          }, routerLink: ['/menu/paraontology']
        }
      ]
    },
    {
      label: 'Help',
      icon: 'fa fa-question',
      items: [
        {
          label: 'Add Department', icon: 'fa fa-eye', command: (event) => {
            this.label = event.item.label;
            console.log('label', this.label);
          }, routerLink: ['/menu/adddepartment']
        }
      ]
      },
    {
      label: 'Logout',
      icon: 'fa fa-sign-out'
    }];

  }

}
