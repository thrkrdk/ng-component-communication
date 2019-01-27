import { Component, OnDestroy, OnInit} from '@angular/core';
import {CekilisSonucService} from '../service/cekilis-sonuc.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cekilis-sonuc',
  templateUrl: './cekilis-sonuc.component.html',
  styleUrls: ['./cekilis-sonuc.component.scss']
})
export class CekilisSonucComponent implements OnInit, OnDestroy {
  listSonuc: string[] = ['?', '?', '?', '?', '?', '?'];
  subscription: Subscription;

  constructor(private  cekisiSonucService: CekilisSonucService) {
    this.subscription = this.cekisiSonucService.getSonuc().subscribe(message => {
      this.listSonuc = message;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
