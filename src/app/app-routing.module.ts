import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreAuditComponent } from './pre-audit/pre-audit.component';
import { RiskOntologyComponent } from './risk-ontology/risk-ontology.component';
import { MenuComponent } from './menu/menu.component';
import { AuditComponent } from './audit/audit.component';
import { ParaOntologyComponent } from './para-ontology/para-ontology.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, children: [{ path: 'preaudit', component: PreAuditComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'riskontology', component: RiskOntologyComponent },
  { path: 'paraontology', component: ParaOntologyComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
