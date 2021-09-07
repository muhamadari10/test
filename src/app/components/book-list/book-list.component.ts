import { Component, OnInit } from '@angular/core';
import { Globals } from '../../shared/common/globals';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  g: Globals;
  bookList: any = [];
  keyItem: number = 0;

  constructor(
    public globals:Globals
  ) {
    this.g = globals;
  }

  ngOnInit(): void {
    this.g.bookListGlobal.subscribe(d => {
      this.bookList = d
      console.log("test",d)
    })
    this.g.bookListUpdateGlobal.subscribe(d => {
      this.keyItem = d
    })
  }

  rate(i:number){
    
    this.g.bookListUpdateGlobal.next(i)
  }

}
