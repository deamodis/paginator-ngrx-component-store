import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <paginator
      [length]="100"
      [pageSize]="10"
      [pageSizeOptions]="[5, 10, 25, 100]"
      (page)="log($event)"
    >
    </paginator>
  `,
})
export class AppComponent {
  log(obj: unknown) {
    console.log(obj);
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/