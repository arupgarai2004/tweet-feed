import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tweets',
    title: 'Tweet List',
   loadChildren: () => import('./features/tweet-list/tweet-list.module').then(m => m.TweetListModule) 
  },
  { path: '', redirectTo: 'tweets', pathMatch: 'full' },  // Redirect root path to tweets module
  { path: '**', redirectTo: 'tweets', pathMatch: 'full' }  // Redirect any unknown path to tweets 

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false })],
  exports: [RouterModule],
  providers:[{provide:LocationStrategy, useClass:HashLocationStrategy}]
})
export class AppRoutingModule { }
