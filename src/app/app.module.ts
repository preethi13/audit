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

@NgModule({
  declarations: [
    AppComponent,
    PreAuditComponent,
    RiskOntologyComponent,
    AuditComponent,
    MenuComponent,
    ParaOntologyComponent
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
    PanelMenuModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ],
  providers: [AuditHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
