import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayDataService {

  data: any= new Subject()

  constructor(

    ) { }


  add(mdata: any){
    this.data.next(mdata)
  }

  get(){
    return this.data
  }
}
