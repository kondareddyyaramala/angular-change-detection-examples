import { Directive, Renderer2, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CAPITALIZE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CapitalizeDirective),
  multi: true
};

@Directive({
  selector: 'capitalize',
  host: {
    '(change)': 'onChange($event.target.value)',
    '(input)': 'onChange($event.target.value)',
    '(blur)': 'onTouched()'
  },
  providers: [CAPITALIZE_VALUE_ACCESSOR]
})
export class CapitalizeDirective implements ControlValueAccessor {
  value: number | string;
  disabled: boolean;
  onChangeFns: Function[];
  onChange = (value: any) => {
    // unformatted value 
    this.onChangeFns.forEach(fn => fn(value.toLowerCase()));
    this.writeValue(value);
    // after calling the functions now figure out the
  };
  onTouched = () => { };

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }
  writeValue(value: string): void {
    const normalizedValue = value == null ? '' : value;
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue.toUpperCase());
  }

  registerOnChange(fn: (_: string|null) => void): void {
    this.onChange = (value) => fn(value);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }
}