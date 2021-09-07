import { Injectable } from '@angular/core';

/* Dsirective */
import { ComponentItem } from '../directive/component-item';

/* Components */
import { BookListComponent } from 'src/app/components/book-list/book-list.component';
import { NewBookComponent } from 'src/app/components/new-book/new-book.component';
import { BookReviewComponent } from 'src/app/components/book-review/book-review.component';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  getComponents(): object {
    return {
      BookListComponent: new ComponentItem(BookListComponent),
      BookReviewComponent: new ComponentItem(BookReviewComponent),
      NewBookComponent: new ComponentItem(NewBookComponent)
    };
  }
}
