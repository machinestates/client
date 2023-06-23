import { TestBed } from '@angular/core/testing';

import { GameAlertService } from './game-alert.service';

describe('GameAlertService', () => {
  let service: GameAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
