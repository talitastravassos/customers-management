import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { 
  MatTableModule,
  MatFormFieldModule, 
  MatInputModule, 
  MatPaginatorModule, 
  MatButtonModule, 
  MatIconModule, 
  MatSortModule, 
  MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersTableComponent } from './components/users-table/users-table.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './components/home/home.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const matModules = [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
];
@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    TopbarComponent,
    HomeComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    [...matModules]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
