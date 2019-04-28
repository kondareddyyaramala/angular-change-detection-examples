import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusTwo]'
})
export class FocusTwoDirective {
  constructor(private _elmRef: ElementRef) {

  }

  @HostListener('change') valueChange() {
    console.log(this._elmRef.nativeElement.value);
    this._elmRef.nativeElement.value = 'Two Directive';
  }
}
