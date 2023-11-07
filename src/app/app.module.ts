import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ExpenseFormComponent } from './hero-section/expense-form/expense-form.component';
import { ExpenseResumeComponent } from './expense-resume/expense-resume.component';
import { InstallmentListComponent } from './installment-list/installment-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    ExpenseFormComponent,
    ExpenseResumeComponent,
    InstallmentListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
