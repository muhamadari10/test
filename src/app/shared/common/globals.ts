import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Globals {
  public bookListGlobal: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public bookListUpdateGlobal: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public bookListReviewGlobal: BehaviorSubject<any> = new BehaviorSubject<any>([]);
}