import { TestBed } from '@angular/core/testing';

import { TweetService } from './tweet.service';
import { BaseService } from './base.service';
import { Tweet } from '../models/tweet.model';
import { APP_CON } from '../config/app.config';
import { of } from 'rxjs';

describe('TweetService', () => {
  let service: TweetService;
  let baseServiceSpy: jasmine.SpyObj<BaseService>;


  beforeEach(() => {
    const spy = jasmine.createSpyObj('BaseService', ['get']);

    TestBed.configureTestingModule({
      providers: [
        TweetService,
        { provide: BaseService, useValue: spy }
      ]
    });

    service = TestBed.inject(TweetService);
    baseServiceSpy = TestBed.inject(BaseService) as jasmine.SpyObj<BaseService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return an Observable<Tweet[]> from getTweets', (done: DoneFn) => {
    fetch('/assets/json/data.json')
      .then(response => response.json())
      .then((expectedTweets: Tweet[]) => {
        baseServiceSpy.get.and.returnValue(of(expectedTweets));

        service.getTweets().subscribe(tweets => {
          expect(tweets).toEqual(expectedTweets);
          done();
        });

        expect(baseServiceSpy.get.calls.count()).toBe(1);
        expect(baseServiceSpy.get.calls.mostRecent().args[0]).toBe(APP_CON.TWEET_API);
      });
  });

  
});
