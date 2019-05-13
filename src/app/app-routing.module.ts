import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreAuditComponent } from './pre-audit/pre-audit.component';
import { RiskOntologyComponent } from './risk-ontology/risk-ontology.component';
import { MenuComponent } from './menu/menu.component';
import { AuditComponent } from './audit/audit.component';
import { ParaOntologyComponent } from './para-ontology/para-ontology.component';
import { AuditExecutionComponent } from './audit-execution/audit-execution.component';
import { LoginComponent } from './login/login.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component:DashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, children: [{ path: 'riskassessment', component: PreAuditComponent },
  {path : 'auditexecution',component:AuditExecutionComponent},
  { path: 'audit', component: AuditComponent },
  { path: 'adddepartment', component: AdddepartmentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'riskontology', component: RiskOntologyComponent },
  { path: 'paraontology', component: ParaOntologyComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
