import { Directive, Input, ElementRef, Renderer2, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/Operators';

@Directive({
  selector: '[appErrorHandler]'
})
export class ErrorHandlerDirective {

  @Input() 
  set errorMessage(msg: string) {
    this._message = msg;
  }

  @Input()
  set valid(valid: boolean){
    this._valid = valid;
  }

  protected _message: string;
  protected _valid: boolean;
  protected _subscription: Subscription;

  protected _errorDiv = null;


  constructor(private _elmRef: ElementRef, private _renderer: Renderer2, 
    private _ngControl: NgControl) { 
     
     
    }

    ngAfterViewInit(){
      this._subscription = this._ngControl.control.statusChanges.subscribe(this.onStatusChange.bind(this));
    }

    onStatusChange(){
      // on form status change, show the error message
      const isValid = this._ngControl.control.valid; 
      if(isValid && this._errorDiv){
        this._renderer.removeChild(this._elmRef.nativeElement.parentElement, this._errorDiv);
        this._errorDiv = null;
      } else if(!isValid && !this._errorDiv){
        this._renderer.appendChild(this._elmRef.nativeElement.parentElement, this.getErrorElement())
      }
    }

    getErrorElement(){
      const div = this._renderer.createElement('div');
      const text = this._renderer.createText('Hello world!');
      this._renderer.appendChild(div, text);
      this._errorDiv = div;
      return div;
    }

    ngOnDestroy(){
      this._subscription && this._subscription.unsubscribe();
    }

}
