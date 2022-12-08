import { Test, TestingModule } from '@nestjs/testing';
import { TokenListController } from './token-list.controller';
import { TokenListService } from './token-list.service';

describe('TokenListController', () => {
  let controller: TokenListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenListController],
      providers: [TokenListService],
    }).compile();

    controller = module.get<TokenListController>(TokenListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
