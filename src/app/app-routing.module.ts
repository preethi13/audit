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
import {GeographicComponent} from './geographic/geographic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      { path: 'riskassessment', component: PreAuditComponent },
      { path: 'auditexecution', component: AuditExecutionComponent },
      { path: 'postaudit', component: AuditComponent },
      { path: 'adddepartment', component: AdddepartmentComponent },
      { path: 'geographic', component: GeographicComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'riskontology', component: RiskOntologyComponent },
      { path: 'paraontology', component: ParaOntologyComponent },
      { path: 'users', component: UserRolesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
