import { Component } from '@angular/core';
import { APP_CON } from 'src/app/core/config/app.config';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  pages: number[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  recordsPerPage: number = APP_CON.TWEETS_PER_PAGE;

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.paginationService.currentPageObs.subscribe(page => {
      this.currentPage = page;
      this.updatePages();
    });

    this.paginationService.totalPagesObs.subscribe(totalPages => {
      this.totalPages = totalPages;
      this.updatePages();
    });

    this.paginationService.recordsPerPageObs.subscribe(recordsPerPage => {
      this.recordsPerPage = recordsPerPage;
      this.updatePages();
    });
  }



  onPageChange(page: number): void {
    this.paginationService.setCurrentPage(page);
  }

  onRecordsPerPageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const records = Number(input.value);
    if (records > 0) {
      this.paginationService.setRecordsPerPage(records);
      
      this.updatePages()
    }
  }

   updatePages(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}


