import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationService } from 'src/app/core/services/pagination.service';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  let paginationService: PaginationService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedComponent],
      imports: [HttpClientModule],
      providers: [ PaginationService],

    })
      .compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should filter tweets based on search query', () => {
    component.searchQuery = 'User 1';
    component.filterTweets();
    expect(component.filteredTweets.length).toBe(0);
  });
  it('should load tweets on initialization', () => {
    expect(component.tweets.length).toBe(0);
    expect(component.filteredTweets.length).toBe(0);
  })
  it('should filter tweets based on search query', () => {
    component.searchQuery = 'User 1';
    component.filterTweets();
    expect(component.filteredTweets.length).toBe(0);
  });

  it('should update displayedTweets after pagination changes', () => {
    fixture.detectChanges(); 
    expect(component.displayedTweets.length).toBe(0); 
  });

  it('should set showRetweetsOnly and filter tweets on showRetweets change', () => {
    component.onShowRetweetsChange(true);
    expect(component.showRetweetsOnly).toBeTrue();
    expect(component.filteredTweets.length).toBe(0);
  });

  it('should get initials from the name', () => {
    const initials = component.getInitials('John Doe');
    expect(initials).toBe('JD');
  });
  
});
