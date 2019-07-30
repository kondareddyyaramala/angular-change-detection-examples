import { Component, ChangeDetectionStrategy, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-obj-reference-detetction',
  templateUrl: './obj-reference-detetction.component.html',
  styleUrls: ['./obj-reference-detetction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjReferenceDetetctionComponent implements DoCheck { 
  public counter = 0;
  @Input() stringObj: String;

  counterClick(){
    this.counter++;
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

}
