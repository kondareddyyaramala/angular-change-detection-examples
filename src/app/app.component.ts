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

  setName(){
    this.name = this.input.nativeElement.value;
  }

  get title(){
    console.log('App comp:: Get title');
    return 'Change detection Example';
  }
}
