import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UpdateGreetingComponent } from './update-greeting/update-greeting.component';

const routes: Routes = [
  { path: '', redirectTo: '/greeting', pathMatch: 'full' },
  { path: 'greeting', component: HelloWorldComponent},
  { path: 'edit-greeting', component: UpdateGreetingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
