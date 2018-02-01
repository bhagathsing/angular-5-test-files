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
  }
  ngAfterViewInit() {
   this.setModalWidth();
  }
  close(evt) {
    const ele = this.elRef.nativeElement.querySelector('.modal-dialog');
    ele.style.top = '-300px';
    setTimeout(() => {
      this.testService.closeModal(evt, this.componentIndex);
    }, 200);
  }
  setModalWidth() {
    const ele = this.elRef.nativeElement.querySelector('.modal-dialog');
    const eleWidth =   ele.getBoundingClientRect();
    ele.style.marginLeft = -(eleWidth.width / 2) + 'px';
    ele.style.top = '10%';
  }

}
