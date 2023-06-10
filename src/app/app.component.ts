import { Component } from '@angular/core';
import { FormBuilder, UntypedFormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, Subscription, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sub = new BehaviorSubject(undefined);
  form = this.fb.group({
    toppings: [[3]],
  });
  toppingOptions = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'].map(
    (label, index) => ({
      id: index + 1,
      label,
    })
  );

  constructor(private fb: UntypedFormBuilder) {}
}
