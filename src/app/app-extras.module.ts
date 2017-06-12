import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';
import { StacheExtrasModule } from './stache-extras.module';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule,
    StacheExtrasModule
  ],
  exports: [
    StacheModule,
    StacheExtrasModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
