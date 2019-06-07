import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponent {
  private _name: string;
  private _localVar: string;

  @Input()
  set name(name: string) {
    // console.log('Child one :: set name');
    this._name = name;
  }

  get name() {
    // console.log('Child one :: Get name');
    return this._name;
  }

  ngDoCheck(changes) {
    console.log('One comp');
  }

  onClick() {
    // reset the var name
    this._localVar = 'Child one :: local var' + Math.random();
  }

  get localVar() {
    // console.log('Child one :: Get local')
    return this._localVar;
  }
}
