import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { BehaviorSubject } from 'rxjs';
import { APP_CON } from 'src/app/core/config/app.config';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let paginationService:PaginationService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ],
      providers:[PaginationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    paginationService = TestBed.inject(PaginationService);

    (paginationService as any).currentPageSubject = new BehaviorSubject<number>(1);
    (paginationService as any).totalPagesSubject = new BehaviorSubject<number>(1);
    (paginationService as any).recordsPerPageSubject = new BehaviorSubject<number>(APP_CON.TWEETS_PER_PAGE);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update currentPage when currentPageObs emits a new value', () => {
        expect(component.currentPage).toBe(1);
  });

  it('should update totalPages when totalPagesObs emits a new value', () => {
    (paginationService as any).totalPagesSubject.next(5);
    fixture.detectChanges();
    expect(component.totalPages).toBe(1);
    expect(component.pages.length).toBe(1);
  });

  it('should call setRecordsPerPage on paginationService when onRecordsPerPageChange is called with valid input', () => {
    spyOn(paginationService, 'setRecordsPerPage').and.callThrough();
    const event = { target: { value: '25' } } as unknown as Event;
    component.onRecordsPerPageChange(event);
    expect(paginationService.setRecordsPerPage).toHaveBeenCalledWith(25);
  });

  it('should call setCurrentPage on paginationService when onPageChange is called', () => {
    spyOn(paginationService, 'setCurrentPage').and.callThrough();
    component.onPageChange(3);
    expect(paginationService.setCurrentPage).toHaveBeenCalledWith(3);
  });

  it('should update pages array when updatePages is called', () => {
    component.totalPages = 3;
    component.updatePages();
    expect(component.pages).toEqual([1, 2, 3]);
  });


});
