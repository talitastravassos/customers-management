import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgTableModule, AgTableCustomSettings } from 'ag-table';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgTableModule
  ],
  providers: [
    {
      provide: AgTableCustomSettings,
      useValue: { lang: 'pt-BR' }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
