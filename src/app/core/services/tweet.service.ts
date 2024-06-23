import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet.model';
import { APP_CON } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private baaseServices:BaseService) { }

  getTweets(): Observable<Tweet[]> {
    return this.baaseServices.get<Tweet[]>(APP_CON.TWEET_API);
  }
}
