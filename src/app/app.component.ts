import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private translocoService: TranslocoService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.translocoService.langChanges$.subscribe((lang) =>
      this.translocoService
        .selectTranslate('app.title')
        .subscribe((value: string) => {
          this.titleService.setTitle(value);
        })
    );
  }
}
