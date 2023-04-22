import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  GetSwitchState() {
    const state = eval(`$('#switch-ekle-cikar').bootstrapSwitch("state")`);
    alert(state);
  }
  constructor() {
    setTimeout(() => {
      eval(`
        $("input[data-bootstrap-switch]").each(function(){
          $(this).bootstrapSwitch('state', $(this).prop('checked'));
        });
        $('.select2').select2();
      `);
    }, 10);
  }
}
