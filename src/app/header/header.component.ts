import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private transloco: TranslocoService) {}
  selectedLang = 'en';
  searchURL = 'https://myurl.com/nextpage/';

  ngOnInit(): void {
    this.transloco.setActiveLang('en');
  }

  public setActiveLang(lang: string) {
    this.transloco.setActiveLang(lang);
    this.selectedLang = this.transloco.getActiveLang();
  }
}
