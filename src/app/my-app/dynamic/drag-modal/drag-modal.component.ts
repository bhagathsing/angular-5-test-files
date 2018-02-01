import {AfterViewInit, Component, ElementRef, HostBinding, OnInit} from '@angular/core';
import {TestService} from '../test-modal/test.service';

@Component({
  selector: 'app-drag-modal',
  templateUrl: './drag-modal.component.html',
  styleUrls: ['./drag-modal.component.css']
})
export class DragModalComponent implements OnInit, AfterViewInit {
  @HostBinding('style.width.px') widthModal: number;
  componentIndex: number;
  constructor(private testService: TestService, private elRef: ElementRef) { }

  ngOnInit() {
    console.log(this.elRef);
  }
  ngAfterViewInit() {
   this.setModalWidth();
  }
  close() {
    this.testService.closeModal(this.componentIndex);
  }
  setModalWidth() {
    const ele = this.elRef.nativeElement.querySelector('.modal-dialog');
    const eleWidth =   ele.getBoundingClientRect();
    ele.style.marginLeft = -(eleWidth.width / 2) + 'px';
    ele.style.top = '10%';
  }

}
