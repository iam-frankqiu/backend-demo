import { Module } from '@nestjs/common';
import { TokenListService } from './token-list.service';
import { TokenListController } from './token-list.controller';

@Module({
  controllers: [TokenListController],
  providers: [TokenListService],
})
export class TokenListModule {}
