import { NgModule } from '@angular/core';

import { StacheModule } from '@blackbaud/stache';

import { stacheConfigProvider } from './lib/stache-config';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [
    stacheConfigProvider
  ],
  entryComponents: []
})
export class AppExtrasModule { }
