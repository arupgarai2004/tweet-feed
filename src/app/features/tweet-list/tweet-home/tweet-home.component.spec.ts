import { ComponentFixture, TestBed } from '@angular/core/testing';

import TweetHomeComponent from './tweet-home.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';



// Mock child components
@Component({
  selector: 'app-search',
  template: '<div></div>'
})
class MockSearchComponent { }

@Component({
  selector: 'app-pagination',
  template: '<div></div>'
})
class MockPaginationComponent { }

@Component({
  selector: 'app-feed',
  template: '<div></div>'
})
class MockFeedComponent {
  @Input() showRetweets: boolean=false;
}

describe('TweetHomeComponent', () => {
  let component: TweetHomeComponent;
  let fixture: ComponentFixture<TweetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TweetHomeComponent,
        MockSearchComponent,
        MockPaginationComponent,
        MockFeedComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showRetweets to false when "All tweets" is selected', () => {
    const allTweetsRadioButton = fixture.debugElement.query(By.css('input[type="radio"][name="tweetFilter"]:nth-child(1)'));
    expect(allTweetsRadioButton).toBeTruthy(); // Check if element is found
    allTweetsRadioButton.triggerEventHandler('change', { target: { checked: true } }); 
    expect(component.showRetweets).toBeFalse();
  });

  

  it('should pass showRetweets to app-feed component', () => {
    component.showRetweets = true;
    fixture.detectChanges();
    const feedComponent = fixture.debugElement.query(By.directive(MockFeedComponent));
    expect(feedComponent).toBeTruthy(); 
    expect(feedComponent.componentInstance.showRetweets).toBeTrue(); 
  });
});
