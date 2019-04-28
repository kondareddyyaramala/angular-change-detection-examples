import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusOne]',
})
export class FocusDirectiveDirective {

  constructor(private _elmRef: ElementRef) {

  }

  @HostListener('change') valueChange() {
    console.log(this._elmRef.nativeElement.value);
    this._elmRef.nativeElement.value = 'First Directive';
  }

}
