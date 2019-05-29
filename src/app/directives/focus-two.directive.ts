import { Directive, ElementRef, HostListener } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Directive({
  selector: '[appFocusTwo]'
})
export class FocusTwoDirective {
  constructor(private _elmRef: ElementRef, private eM: EventManager) {
    // this.eM.addEventListener(_elmRef.nativeElement, 'change', () => {
    //   this.valChange();
    // })
  }

  @HostListener('change') valueChange() {
    this.valChange();
  }

  valChange() {
    console.log('Second directive  ' + this._elmRef.nativeElement.value);
    this._elmRef.nativeElement.value = 'Two Directive';
  }
}
