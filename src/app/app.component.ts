import { Component } from '@angular/core';
import { FormBuilder, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = this.fb.group({
    toppings: [[]],
  });
  toppingOptions = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private fb: UntypedFormBuilder) {
    setTimeout(() => {
      this.form.controls['toppings'].setValue(['Mushroom', 'Onion', 'Pepperoni']);
    }, 3000);
  }
}
