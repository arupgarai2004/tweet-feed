import { Component } from '@angular/core';

@Component({
  selector: 'app-tweet-home',
  templateUrl: './tweet-home.component.html',
  styleUrls: ['./tweet-home.component.scss']
})
export default class TweetHomeComponent {
  showRetweets: boolean=false;

  onShowRetweetsChange(showRetweets: boolean): void {
    this.showRetweets=showRetweets;
  }

}
