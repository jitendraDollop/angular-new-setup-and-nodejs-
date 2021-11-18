import { TestBed, async, inject } from '@angular/core/testing';

import { BeforLoginGuard } from './befor-login.guard';

describe('BeforLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeforLoginGuard]
    });
  });

  it('should ...', inject([BeforLoginGuard], (guard: BeforLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
