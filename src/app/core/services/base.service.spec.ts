import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BaseService', () => {
  let service: BaseService; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseService]
    });

    service = TestBed.inject(BaseService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
