import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LinkifyPipe } from './pipes/linkify.pipe';


@NgModule({
  declarations: [SearchComponent, PaginationComponent, LinkifyPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent,
    PaginationComponent,
    LinkifyPipe
  ]
})

export class ShareModule { }
