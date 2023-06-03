import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChildren,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';

@Component({
  selector: 'app-group-checkbox',
  templateUrl: './group-checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GroupCheckboxComponent),
      multi: true,
    },
  ],
})
export class GroupCheckboxComponent implements ControlValueAccessor {
  value: string[] = [];
  searchValue = '';
  @Input() options: string[] = [];
  @Input() searchable = false;

  onChange: any = (value: string[]) => {};
  onTouch: any = () => {};

  writeValue(value: string[]): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  toggleValue(value: string): void {
    if (this.value.includes(value)) {
      this.value = this.value.filter((v) => v !== value);
    } else {
      this.value = [...this.value, value];
    }

    this.onChange(this.value);
    this.onTouch();
  }

  isChecked(value: string): boolean {
    return this.value.includes(value);
  }
}
