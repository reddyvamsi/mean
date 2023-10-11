import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpnamesComponent } from './day13/empnames/empnames.component';
import { EmpinformationComponent } from './day13/empinformation/empinformation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpnamesComponent,
    EmpinformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
