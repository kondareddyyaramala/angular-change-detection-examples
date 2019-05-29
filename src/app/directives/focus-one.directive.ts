import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusOne]',
})
export class FocusOneDirective {

  constructor(private _elmRef: ElementRef) {

  }

  @HostListener('change') valueChange() {
    console.log('First directive  ' + this._elmRef.nativeElement.value);
    this._elmRef.nativeElement.value = 'First Directive';
  }

}
