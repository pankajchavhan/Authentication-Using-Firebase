import { TestBed } from '@angular/core/testing';

import { LoadingSpinnerInterceptor } from './loading-spinner.interceptor';

describe('LoadingSpinnerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingSpinnerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadingSpinnerInterceptor = TestBed.inject(LoadingSpinnerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
