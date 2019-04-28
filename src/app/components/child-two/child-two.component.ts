import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildTwoComponent {
  private _localVar: string;
  
   get desc(){
     console.log('Child two :: get description');
     return 'Child two component';
   }

   onClick(){
    // reset the var name
    this._localVar = 'Child two :: local var' + Math.random();
  }

  get localVar(){
    console.log('Child two :: Get local')
    return this._localVar;
  }
}
