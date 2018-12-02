import './polyfills.ts'
import os from 'os'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import 'hammerjs'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
import storage from './app/utils/storage'

storage.setDataPath(os.tmpdir());

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err))

