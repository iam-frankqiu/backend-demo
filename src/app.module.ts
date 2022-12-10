import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenListModule } from './token-list/token-list.module';
import { ProposalModule } from './proposal/proposal.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [TokenListModule, ProposalModule, OrganizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
