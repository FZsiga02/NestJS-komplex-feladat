/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsOptional } from 'class-validator';
import CreateAccountDto from './create-account.dto';

export class TransferDto extends PartialType(CreateAccountDto) {

  @IsDefined()
  balance: number;

  @IsDefined()
  amount: number;

}
