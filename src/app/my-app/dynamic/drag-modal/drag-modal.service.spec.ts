import { TestBed, inject } from '@angular/core/testing';

import { DragModalService } from './drag-modal.service';

describe('DragModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragModalService]
    });
  });

  it('should be created', inject([DragModalService], (service: DragModalService) => {
    expect(service).toBeTruthy();
  }));
});
