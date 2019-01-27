import {Component, OnInit} from '@angular/core';
import {CekilisSonucService} from '../service/cekilis-sonuc.service';

@Component({
  selector: 'app-cekilis-basla',
  templateUrl: './cekilis-basla.component.html',
  styleUrls: ['./cekilis-basla.component.scss']
})
export class CekilisBaslaComponent implements OnInit {

  cekilis = {
    mesaj: 'Çekilişe Başlamak için Başlat Butonuna Basınız',
    geriSayim: -1
  };

  constructor(private  cekisiSonucService: CekilisSonucService) {
  }

  ngOnInit() {
  }

  cekilisBaslat() {
    this.cekilis.mesaj = 'Sonuçların Açıklanmasına Kalan Süre';
    this.cekilis.geriSayim = 10;
    const timerId = setInterval((x) => {
      this.cekilis.geriSayim -= 1;
      if (this.cekilis.geriSayim === 0) {
        clearInterval(timerId);
        this.cekisiSonucService.cekilisSonuc();
        this.cekilis = {
          mesaj: 'Çekiliş Tamamlandı. Yeni Çekiliş İçin Başlat Butonuna Basınız',
          geriSayim: -1
        };

      }
    }, 1000);
  }

}
