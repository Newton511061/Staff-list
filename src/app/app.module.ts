import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StaffListComponent } from './staff-list/staff-list.component';
import { SearchComponent } from './staff-list/search/search.component';
import { ListComponent } from './staff-list/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    StaffListComponent,
    SearchComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
