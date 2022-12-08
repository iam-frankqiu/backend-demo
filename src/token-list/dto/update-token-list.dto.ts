import { PartialType } from '@nestjs/mapped-types';
import { CreateTokenListDto } from './create-token-list.dto';

export class UpdateTokenListDto extends PartialType(CreateTokenListDto) {}
