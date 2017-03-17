import { Component,
         OnInit,
         Input,
         ContentChildren,
         AfterContentInit } from '@angular/core';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { StachePageAnchorComponent } from './index';

@Component({
  selector: 'stache',
  templateUrl: './stache.component.html'
})
export class StacheComponent implements OnInit, AfterContentInit {
  @Input()
  public layout: string = 'default';

  @Input()
  public pageTitle: string = 'Page Title';

  @Input()
  public browserTitle: string = 'Browser Title';

  public routes: any[] = [];

  @ContentChildren(StachePageAnchorComponent)
  private headings;

  public constructor(private router: Router, private titleService: Title) {}

  public ngOnInit(): void {
    this.titleService.setTitle(this.browserTitle);
  }

  public ngAfterContentInit(): void {
    // Generate in-page navigation here.
    this.headings.forEach(h => {
      this.routes.push({
        path: [this.router.url],
        fragment: h.anchor,
        label: 'My Link'
      });
    });
  }
}
