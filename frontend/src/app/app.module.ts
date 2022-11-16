import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputHarness} from '@angular/material/input/testing';
import {ApiService} from './api.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';
// import {MatCardModule} from '@angular/material/card';
// import {MatcardtitleModule} from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HighlightDirective
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // MatCardModule,
    // MatcardtitleModule,
  

    AppRoutingModule,
    RouterModule.forRoot([
      {path:"register",component:RegisterComponent}
    ]),
    


  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
