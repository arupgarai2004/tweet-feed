import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetListRoutingModule } from './tweet-list-routing.module';
import TweetHomeComponent from './tweet-home/tweet-home.component';
import {ShareModule} from '../../shared/shared.module';
import { FeedComponent } from './feed/feed.component'


@NgModule({
  declarations: [
    TweetHomeComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    TweetListRoutingModule,
    ShareModule
  ]
})
export class TweetListModule { }
