import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySubject = new BehaviorSubject<string>('');
  constructor() { }
  
  searchQueryObs = this.searchQuerySubject.asObservable();

  get searchQuery(): string {
    return this.searchQuerySubject.value;
  }

  setsearchQuery(queryStr:string):void{
    this.searchQuerySubject.next(queryStr);
  }

}
