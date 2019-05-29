import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, ViewRef, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { UrlResolver } from '@angular/compiler';

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


  constructor(private viewRef: ViewRef, private vcRef: ViewContainerRef,
    private compResol: ComponentFactoryResolver){
    console.log('App comp constructor');
    this.value = '1234';
  }

  setName() {
    this.name = this.input.nativeElement.value;
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
    console.log('App component  ' + event.target.value);
    this.translatedText = event.target.value;
  }
}
