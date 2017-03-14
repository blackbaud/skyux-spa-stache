import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stache-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class StacheLayoutComponent implements OnInit {
  @Input()
  public layout: string = 'sidebar';

  public ngOnInit(): void {}
}
