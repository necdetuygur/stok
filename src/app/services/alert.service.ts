import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}
  Fire(type: string, title: string, body: string) {
    eval(`
      $(document).Toasts('create', {
        class: 'bg-${type}',
        title: '${title}',
        body: '${body}'
      })
    `);
  }
}
