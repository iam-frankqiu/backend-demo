import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenListModule } from './token-list/token-list.module';

@Module({
  imports: [TokenListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
