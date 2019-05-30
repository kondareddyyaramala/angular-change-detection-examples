import { Directive, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appForm]'
})
export class FormDirective {

  constructor(@Optional() private ngControl: NgControl) {
  }

  @HostListener('input', ['$event' , '$event']) onchange(event, b) {
    let val = event.target.value;
    console.log('Directice :: ' + event);
    this.ngControl.control.patchValue(val.toUpperCase(), { emitEvent: false });
  }

}
