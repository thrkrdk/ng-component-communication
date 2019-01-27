import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CekilisSonucService {

  cekilisList: Subject<string[]> = new Subject<string[]>();

  constructor() {
  }

  getSonuc(): Observable<any> {
    return this.cekilisList.asObservable();
  }

  cekilisSonuc() {
    this.cekilisList.next(Array.from({length: 6}, () => Math.floor(Math.random() * 10).toString()));
  }
}
