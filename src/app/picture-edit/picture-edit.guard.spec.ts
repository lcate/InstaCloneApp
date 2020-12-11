import { TestBed } from '@angular/core/testing';

import { PictureEditGuard } from './picture-edit.guard';

describe('PictureEditGuard', () => {
  let guard: PictureEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PictureEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
