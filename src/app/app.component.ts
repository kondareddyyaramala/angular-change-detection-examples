import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, ViewRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild('inputRef') input: ElementRef;
  name = null;
  translatedText = null;
  value = null;
  private _obj = new String('This is object');

  public counts = Array(10).fill('').map((_v, i) => `Value ${i}`);

  formGroup: FormGroup = null;


  constructor(private viewRef: ViewRef, private vcRef: ViewContainerRef,
    private compResol: ComponentFactoryResolver, private fb: FormBuilder) {
    this.value = '1234';
    this.formGroup = this.fb.group({ 
      name: ['aaaasa', [Validators.required]],
      lastName: ['', [Validators.minLength(14)]],
      count: ['']
    });

    this.formGroup.get('count').valueChanges.subscribe(v => {
      console.log('Form Value change ap comp  ' + v);
    });
  }

  ngDoCheck(changes) {
    console.log('App comp');
  }

  setName() {
    this.name = this.input.nativeElement.value;
  }

  logname(){
    console.log('Payload ::: '+ JSON.stringify(this.formGroup.value));
  }

  get title() {
    console.log('App comp:: Get title');
    return 'Change detection Example';
  }

  onValueChange(event) {
    console.log('App component  ' + event.target.value);
    this.translatedText = event.target.value;
  }
  onBlur(event) {
    console.log('App component    ' + event.target.value);
    this.translatedText = event.target.value;
  }

  get stringObj(){
    console.log('String object');
    return this._obj.bold();
  }

  counterClick(){
    // this.counter++;
  }
}
