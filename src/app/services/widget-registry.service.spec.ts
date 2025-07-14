import { TestBed } from '@angular/core/testing';

import { WidgetRegistryService } from './widget-registry.service';

describe('WidgetRegistryService', () => {
  let service: WidgetRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
