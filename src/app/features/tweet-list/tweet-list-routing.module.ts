import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import TweetHomeComponent from './tweet-home/tweet-home.component';

const routes: Routes = [{ path: '', component: TweetHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TweetListRoutingModule { }
