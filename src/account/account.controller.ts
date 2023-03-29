/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountService } from './account.service';
import  CreateAccountDto  from './dto/create-account.dto';
import { TransferDto } from './dto/transfer.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Controller('account')
export class AccountController {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>
  ) {}
  @Post('')
  async create(@Body() accountData: CreateAccountDto) {
    const newAccount = await this.accountRepository.create(accountData);
    await this.accountRepository.save(newAccount)
    return newAccount;
  }

  @Get('/:id')
  async getById(id: number) {
    const account = await this.accountRepository.findOne({where: { id }});
    if (account) {
      return account;
    }
    throw new HttpException('Nem létezik számla ezzel az azonosítóval', HttpStatus.NOT_FOUND);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountRepository.update(+id, updateAccountDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    //return this.accountRepository.remove(id)
  }

  @Post('/transfer/:sourceId/:targetId')
  transfer(@Param('sourceId') sourceId: number, @Param('targetId') targetId: number, @Body() transferDto: TransferDto) {
    return this.accountRepository.update(+sourceId, transferDto), this.accountRepository.update(+targetId, transferDto)
  }
}
