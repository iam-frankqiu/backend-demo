import { Injectable } from '@nestjs/common';
import { CreateTokenListDto } from './dto/create-token-list.dto';
import { UpdateTokenListDto } from './dto/update-token-list.dto';

@Injectable()
export class TokenListService {
  create(createTokenListDto: CreateTokenListDto) {
    return 'This action adds a new tokenList';
  }

  findAll() {
    return ['ETH'];
  }

  findOne(id: number) {
    return `This action returns a #${id} tokenList`;
  }

  update(id: number, updateTokenListDto: UpdateTokenListDto) {
    return `This action updates a #${id} tokenList`;
  }

  remove(id: number) {
    return `This action removes a #${id} tokenList`;
  }
}
