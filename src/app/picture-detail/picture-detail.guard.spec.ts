import { TestBed } from '@angular/core/testing';

import { PictureDetailGuard } from './picture-detail.guard';

describe('PictureDetailGuard', () => {
  let guard: PictureDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PictureDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
