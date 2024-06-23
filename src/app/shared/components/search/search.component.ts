import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private searchService: SearchService) { }

  ngOnInit() {

  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const search = String(input.value);
    this.searchService.setsearchQuery(search);
  }

}
