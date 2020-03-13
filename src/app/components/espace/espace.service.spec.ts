import { TestBed } from '@angular/core/testing';

import { EspaceService } from './espace.service';

describe('EspaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspaceService = TestBed.get(EspaceService);
    expect(service).toBeTruthy();
  });
});
