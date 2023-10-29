import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './components/sharedcomponents/dropdown/dropdown/dropdown.component';
import { InputlabelComponent } from './components/sharedcomponents/inputlabel/inputlabel/inputlabel.component';
import { LabelComponent } from './components/sharedcomponents/label/label/label.component';
import { BreadscurmComponent } from './components/sharedcomponents/breadscurm/breadscurm/breadscurm.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    InputlabelComponent,
    LabelComponent,
    BreadscurmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
