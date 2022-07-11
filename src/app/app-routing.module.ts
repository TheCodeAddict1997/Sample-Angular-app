import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  { path: '', component: AdduserComponent },
  { path: 'home', component: AdduserComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
