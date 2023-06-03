import { Component, Host, Input } from '@angular/core';
import { GroupCheckboxComponent } from '../group-checkbox.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() label!: string;
  @Input() value!: string;

  constructor(@Host() public checkboxGroup: GroupCheckboxComponent) {}
}
