import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, Type} from '@angular/core';
import {DragModalComponent} from '../drag-modal/drag-modal.component';
import {ModalControl} from '../drag-modal/drag-modal-ctl';
@Injectable()
export class TestService {
  private  modalComponent: Type<any> =  DragModalComponent;
  private  components = [];

  private _resolve: (result?: any) => void;
  private _reject: (reason?: any) => void;
  result: Promise<any>;
  private sendConfirmResult: () => any;
  private sendCancelResult: () => any;

  modalCtl: ModalControl = new ModalControl();
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.then(null, () => {});
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

    // return new Promise<any>((resolve, reject) => {
    //   this.buildDialogResponses(resolve, reject);
    // });
    this.modalCtl = new ModalControl();
    return this.modalCtl;
  }

  private buildDialogResponses(resolve, reject): any {
    this.sendConfirmResult = (): any => {
      resolve();
      return true;
    };
    this.sendCancelResult = (): any => {
      reject();
      return false;
    };
  }

  public onConfirmClick(evt: Event, index): void {
    evt.preventDefault();
    //this.sendConfirmResult();
    this.closeModalWindow(index);
    this.modalCtl.close('ok');
  }

  public onCancelClick(evt: Event, index): void {
    evt.preventDefault();
   // this.sendCancelResult();
    this.closeModalWindow(index);
    this.modalCtl.close('cancel');
  }
  public onDissmiss(evt: Event, index): void {
    evt.preventDefault();
    this.closeModalWindow(index);
    this.modalCtl.dismiss('dissmiss');
  }
  //
  // public closeModal( evt, index ) {
  //   this.closeModalWindow(index);
  //   this.onCancelClick(evt);
  // }
  private closeModalWindow(index ) {
    let componentIndex = index - 1;
    if (componentIndex !== -1) {
      let obj =  this.components[componentIndex];
      this.appRef.detachView(obj.hostView);
      obj.destroy();
      this.components.splice(componentIndex, 1);
    }
  }
}
