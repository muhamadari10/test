import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../shared/common/globals';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  
  form: FormGroup;
  g: Globals;
  bookList: any = [];
  constructor(
    public fb: FormBuilder,
    public globals:Globals
  ) {
    this.form = this.fb.group({
      name: '',
      years: ''
    })
    this.g = globals;
  }

  ngOnInit() { 
    this.g.bookListGlobal.subscribe(d => {
      this.bookList = d
    })
  }

  submitForm() {
    const item = {
      // @ts-ignore: Object is possibly 'null'.
      name:this.form.get('name').value,
      // @ts-ignore: Object is possibly 'null'.
      year:this.form.get('years').value,
      star:0,
    }
    this.bookList.push(item)
    this.g.bookListGlobal.next(this.bookList);
  }

}



