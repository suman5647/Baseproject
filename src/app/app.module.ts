import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './components/sharedcomponents/dropdown/dropdown.component';
import { InputlabelComponent } from './components/sharedcomponents/inputlabel/inputlabel.component';
import { LabelComponent } from './components/sharedcomponents/label/label.component';
import { BreadscurmComponent } from './components/sharedcomponents/breadscurm/breadscurm.component';
import { LoginComponent } from './components/userauth/login/login.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SignupComponent } from './components/userauth/signup/signup.component';
import { ResetPasswordComponent } from './components/userauth/reset-password/reset-password.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LandingpageComponent } from './components/common/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    InputlabelComponent,
    LabelComponent,
    BreadscurmComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    ResetPasswordComponent,
    LandingpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule {};
