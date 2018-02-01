import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfElse]'
})
export class IfElseDirective {

  private  isView = false;
  constructor( private  templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
  @Input() set appIfElse( condition: boolean) {
    if (!this.isView && !condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.isView = true;
    }else if (condition && this.isView) {
      this.viewContainerRef.clear();
      this.isView = false;
    }
  }

}
