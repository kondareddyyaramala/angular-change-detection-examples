import { Component, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';

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

  setName(){
    this.name = this.input.nativeElement.value;
  }

  get title(){
    console.log('App comp:: Get title');
    return 'Change detection Example';
  }

  onValueChange(event){
    console.log(event.target.value);
    this.translatedText = event.target.value;
  }
}
