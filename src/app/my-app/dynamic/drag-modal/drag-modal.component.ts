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
      this.testService.onDissmiss(evt, this.componentIndex);
    }, 200);
  }
  setModalWidth() {
    const ele = this.elRef.nativeElement.querySelector('.modal-dialog');
    const eleWidth =   ele.getBoundingClientRect();
    let wW = window.innerWidth -  eleWidth.width
   ele.style.left = (wW / 2) + 'px';
    ele.style.top = '60px';
    this.dragElement();
  }

  dragElement() {
    let elmnt = this.elRef.nativeElement.querySelector('.modal-header');
    var _this = this;
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    function mouseUp() {
      window.removeEventListener('mousemove', divMove, true);
    }

    function mouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;

      window.addEventListener('mousemove', divMove, true);
    }

    function divMove(e) {
      var div = _this.elRef.nativeElement.querySelector('.modal-dialog');
      e = e || window.event;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      div.style.top = (div.offsetTop - pos2) + "px";
      div.style.left = (div.offsetLeft - pos1) + "px";
    }
  }

}
