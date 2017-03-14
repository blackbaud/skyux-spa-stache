import { NgModule } from '@angular/core';

import { StacheLayoutComponent, StacheNavHeadingComponent } from './shared/stache';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [],
  entryComponents: [
    StacheNavHeadingComponent,
    StacheLayoutComponent
  ]
})
export class AppExtrasModule { }
