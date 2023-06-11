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
  styles: [
    `
      $items-inline-margin: 0.5rem;
      .container {
        display: grid;
        width: max-content;
        padding-block: 0.5rem;
        border-radius: 0.25rem;
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        overflow: hidden;
        gap: 0.5rem;

        > *:not(.mat-divider) {
          margin-inline: $items-inline-margin;
        }
      }

      .mat-mdc-checkbox {
        border-radius: 0.25rem;
        cursor: pointer;
        width: calc(100% - #{$items-inline-margin * 2});

        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
      }
    `,
  ],
})
export class GroupCheckboxComponent implements ControlValueAccessor {
  value: number[] = [];
  searchValue = '';
  @Input() options: { id: number; label: string }[] = [];

  // config the checkboxes-group
  @Input() shouldGroupSelected = false;
  @Input() searchable = false;
  @Input() hasSelectAll = false;

  onChange: any = (value: string[]) => {};
  onTouch: any = () => {};

  writeValue(selectedIds: number[]): void {
    this.value = selectedIds;
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  toggleValue(value: number): void {
    if (this.value.includes(value)) {
      this.value = this.value.filter((v) => v !== value);
    } else {
      this.value = [...this.value, value];
    }

    this.onChange(this.value);
    this.onTouch();
  }

  selectAll(): void {
    if (this.value.length === this.options.length) {
      this.value = [];
    } else {
      this.value = this.options.map((option) => option.id);
    }

    this.onChange(this.value);
    this.onTouch();
  }

  isChecked(value: number): boolean {
    return this.value.includes(value);
  }

  isAllChecked(): boolean {
    return this.value.length === this.options.length;
  }

  isIndeterminate(): boolean {
    return this.value.length > 0 && !this.isAllChecked();
  }
}
