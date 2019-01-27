import {Component, ViewChild} from '@angular/core';
import {CekilisBaslaComponent} from './cekilis-basla/cekilis-basla.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild(CekilisBaslaComponent) child; // Child componenti bir nevi parent componente enject ediyoruz
  date: string = new Date().toLocaleDateString();
}

