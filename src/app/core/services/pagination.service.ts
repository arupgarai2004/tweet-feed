import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APP_CON } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private currentPageSubject = new BehaviorSubject<number>(1);
  private totalPagesSubject = new BehaviorSubject<number>(1);
  private recordsPerPageSubject = new BehaviorSubject<number>(APP_CON.TWEETS_PER_PAGE);

  constructor() { }

  currentPageObs = this.currentPageSubject.asObservable();
  totalPagesObs = this.totalPagesSubject.asObservable();
  recordsPerPageObs = this.recordsPerPageSubject.asObservable();
  private totalRecords: number = 0;

  get currentPage(): number {
    return this.currentPageSubject.value;
  }

  get totalPages(): number {
    return this.totalPagesSubject.value;
  }

  get recordsPerPage(): number {
    return this.recordsPerPageSubject.value;
  }

  setCurrentPage(page: number): void {
    this.currentPageSubject.next(page);
  }

  setTotalRecords(totalRecords: number): void {
    this.totalRecords = totalRecords;
    this.updateTotalPages();
  }

  setRecordsPerPage(records: number): void {
    this.recordsPerPageSubject.next(records);
    this.updateTotalPages();
  }

  private updateTotalPages(): void {
    const totalPages = Math.ceil(this.totalRecords / this.recordsPerPage);
    this.totalPagesSubject.next(totalPages);
  }

}
