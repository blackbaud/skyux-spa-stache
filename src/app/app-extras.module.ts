import { NgModule } from '@angular/core';

import { BBAuth } from '@blackbaud/auth-client';

import { SkyAppConfig } from '@blackbaud/skyux-builder/runtime';

import { SkyAppBootstrapper } from '@blackbaud/skyux-builder/runtime/bootstrapper';

import { StacheModule, StacheConfigService } from '@blackbaud/stache';

const decode = require('jwt-decode');

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
  ],
  entryComponents: []
})
export class AppExtrasModule { }

(SkyAppBootstrapper as any).processBootstrapConfig = () => {
  return BBAuth.getToken().then((token: string) => {
    const emailDomainWhitelist: any = [
      'blackbaud.com',
      'blackbaud.me',
      'blackbaud.co.uk',
      'blackbaud.au',
      'microedge.com',
      'attentive.ly',
      'everydayhero.com'
    ];
    let parsedToken = decode(token);
    let domain = parsedToken.email.split('@')[1];
    console.log('token: ', parsedToken);
    if (emailDomainWhitelist.includes(domain)) {
      return Promise.resolve(true);
    }
    return Promise.reject('Must be a Blackbaud employee to access this content. Please log in with a valid Blackbaud email address.');
  });
};
