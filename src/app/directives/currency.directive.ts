import { Directive, ElementRef, HostListener, ViewRef, ComponentFactoryResolver, ChangeDetectorRef, EmbeddedViewRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective {

  constructor(private el: ElementRef, vr: ViewRef, cr: ComponentFactoryResolver
    , cd: ChangeDetectorRef, em: EmbeddedViewRef<AppComponent>) {
      console.log('Directive constructor');
      this.onblur();
   }

    @HostListener('input') onchange(event: Event){
        // on input just replace the content of the
        // native element 
        const { value } = this.el.nativeElement;
        this.el.nativeElement.value = String(value).replace(/\D/g,'');
    }

    @HostListener('blur') onblur(){
        // on blur format the value and then set the value
        // remove all the values and change it to a new format
        const { value } = this.el.nativeElement;
        let val = (new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(value));
        this.el.nativeElement.value = val;
    }

    @HostListener('focus') onFocus(){
        // on blur format the value and then set the value
        // remove all the values and change it to a new format
        const { value } = this.el.nativeElement;
        this.el.nativeElement.value = value.replace(/\D/g,'');
    }


}
