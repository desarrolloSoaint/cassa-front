import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/pages/home/home.component';
import { DasboardComponent } from './components/pages/dasboard/dasboard.component';
import { TableComponent } from './components/molecules/table/table.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { InputComponent } from './components/molecules/input/input.component';
import { FooterComponent } from './components/molecules/footer/footer.component';
import { ButtonComponent } from './components/molecules/button/button.component';
import { LoginComponent } from './components/atoms/login/login.component';
import { UploadComponent } from './components/atoms/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DasboardComponent,
    TableComponent,
    HeaderComponent,
    NavbarComponent,
    InputComponent,
    FooterComponent,
    ButtonComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
