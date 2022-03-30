import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateGreetingComponent } from './update-greeting/update-greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UpdateGreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
