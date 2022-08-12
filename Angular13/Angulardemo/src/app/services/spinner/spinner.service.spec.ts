import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#show', () => {
    it('it should set isLoading$ to true when click on show', () => {
      //Arrange
     
      //Act
      service.show();
      //expect
      expect(service.isLoading$).toBeTrue;
    });
  });

  describe('#hide', () => {
    it('it should set isLoading$ to false when click on hide', () => {
      //Arrange
     
      //Act
      service.hide();
      //expect
      expect(service.isLoading$).toBeFalse;
    });
  });
});
