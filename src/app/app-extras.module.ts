import { NgModule } from '@angular/core';
import { StacheModule } from '@blackbaud/stache';

require('style!@blackbaud/stache/src/styles/stache.scss');

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [StacheModule],
  exports: [StacheModule],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
