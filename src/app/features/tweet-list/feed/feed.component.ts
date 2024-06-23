import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Tweet } from 'src/app/core/models/tweet.model';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { SearchService } from 'src/app/core/services/search.service';
import { TweetService } from 'src/app/core/services/tweet.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnChanges {
  tweets: Tweet[] = [];
  displayedTweets: Tweet[] = [];
  showRetweetsOnly: boolean = false;
  filteredTweets: Tweet[] = [];
  searchQuery: string = '';

  @Input() showRetweets: boolean = false


  constructor(
    private tweetService: TweetService,
    private paginationService: PaginationService,
    private searchService: SearchService,
    private  sanitizer:DomSanitizer
  ) { }

  ngOnInit() {
    this.loadTweet();

    this.paginationService.currentPageObs.subscribe(() => {
      this.updateDisplayedTweets();
    });

    this.paginationService.recordsPerPageObs.subscribe(() => {
      this.updateDisplayedTweets();
    });

    this.searchService.searchQueryObs.subscribe((searchQuery) => {
      this.onSearchChange(searchQuery);
    })

  }
  //to load tweet
  loadTweet(): void {
    this.tweetService.getTweets().subscribe((data: Tweet[]) => {
      this.tweets = data;
      this.filterTweets();
    });
  }

  //Tweet after filter/serch/paginatiom
  updateDisplayedTweets(): void {
    const currentPage = this.paginationService.currentPage;
    const recordsPerPage = this.paginationService.recordsPerPage;
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    this.displayedTweets = this.filteredTweets.slice(startIndex, endIndex);
  }

  // Function to get initials from the name
  getInitials(name: string): string {
    if (!name) return '';
    const names = name.split(' ');
    return names.map(name => name[0]).join('').toUpperCase();
  }


  onShowRetweetsChange(showRetweets: boolean): void {
    this.showRetweetsOnly = showRetweets;
    this.paginationService.setCurrentPage(1);
    this.filterTweets();
  }


  filterTweets(): void {
    let tempTweets = this.tweets;

    if (this.showRetweetsOnly) {
      tempTweets = tempTweets.filter(tweet => tweet.retweeted_status);
    }

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      tempTweets = tempTweets.filter(tweet =>
        tweet.user.name.toLowerCase().includes(query) ||
        tweet.user.screen_name.toLowerCase().includes(query) ||
        (tweet.retweeted_status && tweet.retweeted_status.user.name.toLowerCase().includes(query)) ||
        (tweet.retweeted_status && tweet.retweeted_status.user.screen_name.toLowerCase().includes(query))
      );
    }
    this.filteredTweets = tempTweets;
    this.paginationService.setTotalRecords(this.filteredTweets.length);
    this.updateDisplayedTweets();
  }

  onSearchChange(query: string): void {
    this.searchQuery = query;
    this.paginationService.setCurrentPage(1);
    this.filterTweets();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.onShowRetweetsChange(changes['showRetweets'].currentValue);
  }

  showDefaultImage(user:any){
    user.profile_image_url='assets/images/noImage.png'
  }

  sanitizeImageUrl(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }

}
