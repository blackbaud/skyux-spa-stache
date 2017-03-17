import { NgModule } from '@angular/core';
import { StacheModule } from '../stache/stache.module';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [StacheModule],
  exports: [StacheModule],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
