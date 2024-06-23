import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { SearchService } from 'src/app/core/services/search.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [SearchService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setsearchQuery on the search service when onSearch is called', () => {
   

    const searchQuery = 'test';
    const inputEvent = {
      target: { value: searchQuery }
    } as unknown as Event;

    expect(component.onSearch(inputEvent)).toBe();
  });
});
