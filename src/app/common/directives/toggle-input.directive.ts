import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appToggleInput]'
})
export class ToggleInputDirective {
  private _appToggleInput = false;
  constructor() { }
  @Input() set appToggleInput( val: any) {
    console.log(val);
    this._appToggleInput = val;
  }
  // public get appToggleInput(){
  //   return this._appToggleInput;
  // }
}
