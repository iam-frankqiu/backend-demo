import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TokenListService } from './token-list.service';
import { CreateTokenListDto } from './dto/create-token-list.dto';
import { UpdateTokenListDto } from './dto/update-token-list.dto';

@Controller('token-list')
export class TokenListController {
  constructor(private readonly tokenListService: TokenListService) {}

  @Post()
  create(@Body() createTokenListDto: CreateTokenListDto) {
    return this.tokenListService.create(createTokenListDto);
  }

  @Get()
  findAll() {
    return this.tokenListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tokenListService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTokenListDto: UpdateTokenListDto,
  ) {
    return this.tokenListService.update(+id, updateTokenListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokenListService.remove(+id);
  }
}
