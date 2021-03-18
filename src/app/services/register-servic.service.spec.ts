import { TestBed } from '@angular/core/testing';

import { RegisterServicService } from './register-servic.service';

describe('RegisterServicService', () => {
  let service: RegisterServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
