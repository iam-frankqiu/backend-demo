import { Test, TestingModule } from '@nestjs/testing';
import { TokenListService } from './token-list.service';

describe('TokenListService', () => {
  let service: TokenListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenListService],
    }).compile();

    service = module.get<TokenListService>(TokenListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
