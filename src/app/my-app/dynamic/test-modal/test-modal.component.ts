import {
  Component,
  ComponentFactoryResolver, Type,
  ApplicationRef,
  EmbeddedViewRef,
  OnInit,
  Injector
} from '@angular/core';
import {DragModalComponent} from '../drag-modal/drag-modal.component';
import {TestService} from './test.service';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {

  components = [];

  // Expose class so that it can be used in the template
  fooComponentClass = DragModalComponent;

  constructor(private testService: TestService) {
  }
  ngOnInit() {}
  openModal() {
    this.testService.open().then(() => {

    }).catch(() => {
      console.log('hi close');
    });
  }

}
