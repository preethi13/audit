
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreAuditComponent } from './pre-audit/pre-audit.component';
import { RiskOntologyComponent } from './risk-ontology/risk-ontology.component';
import {TabViewModule} from 'primeng/tabview';
import { AuditComponent } from './audit/audit.component';
import { AuditHttpService } from './utility/auditHttpService';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
// import {HttpHeaders} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { ParaOntologyComponent } from './para-ontology/para-ontology.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { AuditExecutionComponent } from './audit-execution/audit-execution.component';
import {CheckboxModule} from 'primeng/checkbox';
import {TreeTableModule} from 'primeng/treetable';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ChipsModule} from 'primeng/chips';
import {RadioButtonModule} from 'primeng/radiobutton';
import { UserRolesComponent } from './user-roles/user-roles.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {FieldsetModule} from 'primeng/fieldset';
import {KeyFilterModule} from 'primeng/keyfilter';
import { GeographicComponent } from './geographic/geographic.component';
import {OrderListModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    PreAuditComponent,
    RiskOntologyComponent,
    AuditComponent,
    MenuComponent,
    ParaOntologyComponent,
    AuditExecutionComponent,
    LoginComponent,
    AdddepartmentComponent,
    DashboardComponent,
    UserRolesComponent,
    GeographicComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TabViewModule,
    TableModule,
    FieldsetModule,
    PanelMenuModule,
    MultiSelectModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    DialogModule,
    MessagesModule,
    RadioButtonModule,
    MessageModule,
    ToastModule,
    CheckboxModule,
    TreeTableModule,
    SplitButtonModule,
    AccordionModule,
    AutoCompleteModule,
    ChipsModule,
    KeyFilterModule,
    OrderListModule,
  

  ],
  providers: [AuditHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
