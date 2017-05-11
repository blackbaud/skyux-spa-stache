import { NgModule } from '@angular/core';

import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';

import { StacheModule, StacheConfigService } from '@blackbaud/stache';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheModule
  ],
  exports: [
    StacheModule
  ],
  providers: [
    {
      provide: StacheConfigService,
      useExisting: SkyAppConfig
    }
  ]
})
export class AppExtrasModule { }
