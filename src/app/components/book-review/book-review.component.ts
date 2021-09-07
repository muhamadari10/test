import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../shared/common/globals';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  form: FormGroup;
  g: Globals;
  bookListReview: any = [];
  bookList: any = []
  idItem : number = 0;

  constructor(
    public fb: FormBuilder,
    public globals:Globals
  ) {
    this.form = this.fb.group({
      email: '',
      note: '',
      star:'',
      starView:[]
    })
    this.g = globals;
  }

  ngOnInit() { 
    this.g.bookListUpdateGlobal.subscribe(d => {
      this.idItem = d
    })
    this.g.bookListReviewGlobal.subscribe(d => {
      this.bookListReview = d
    })
    this.g.bookListGlobal.subscribe(d => {
      this.bookList = d
    })
  }

  submitForm() {
    let startDefault = ['inactive','inactive','inactive','inactive','inactive']
    // @ts-ignore: Object is possibly 'null'.
    const star = this.form.get('star').value
    if(star > 0){
      for (let index = 0; index < star; index++) {
        startDefault[index] = 'active'
      }
    }
    console.log("startdefault ",startDefault)

    const item = {
      // @ts-ignore: Object is possibly 'null'.
      id:this.idItem,
      // @ts-ignore: Object is possibly 'null'.
      email:this.form.get('email').value,
      // @ts-ignore: Object is possibly 'null'.
      note:this.form.get('note').value,
      // @ts-ignore: Object is possibly 'null'.
      star:this.form.get('star').value,
      starView:startDefault
    }
    this.bookListReview.push(item)
    this.g.bookListReviewGlobal.next(this.bookListReview);
  }

}



