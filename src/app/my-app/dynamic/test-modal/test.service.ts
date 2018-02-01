import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, Type} from '@angular/core';
import {DragModalComponent} from '../drag-modal/drag-modal.component';

@Injectable()
export class TestService {
  modalComponent: Type<any> =  DragModalComponent;
  components = [];
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }

  open() {
    const component = this.componentFactoryResolver
      .resolveComponentFactory(this.modalComponent)
      .create(this.injector);

    component.instance.componentIndex = this.components.length + 1;
    this.components.push(component);

    this.appRef.attachView(component.hostView);

    const domElem = (component.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  closeModal( index ) {
    let componentIndex = index - 1;
    if (componentIndex !== -1) {
      let obj =  this.components[componentIndex];
      this.appRef.detachView(obj.hostView);
      obj.destroy();
      this.components.splice(componentIndex, 1);
    }
  }


}
