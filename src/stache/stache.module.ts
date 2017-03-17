import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  StachePageAnchorComponent,
  StachePageHeaderComponent,
  StacheMenuComponent,
  StacheLayoutComponent,
  StacheComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    StachePageAnchorComponent,
    StachePageHeaderComponent,
    StacheMenuComponent,
    StacheLayoutComponent,
    StacheComponent
  ],
  exports: [
    StachePageAnchorComponent,
    StachePageHeaderComponent,
    StacheMenuComponent,
    StacheLayoutComponent,
    StacheComponent
  ],
  providers: [
    Title
  ]
})
export class StacheModule { }
