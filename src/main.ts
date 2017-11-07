import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';



if (environment.production) {
    enableProdMode();
  }else{
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => {
        let _styles = document.head.querySelectorAll('style');
        let styles = Array.prototype.slice.call(_styles);
        styles
          .filter((style: any) => style.innerText.indexOf('_ng') !== -1)
          .map((el: any) => document.head.removeChild(el));
      })
    }
  }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
