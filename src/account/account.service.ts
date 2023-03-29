/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateAccountDto from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>
  ) {}
  async create(accountData: CreateAccountDto) {
    const newAccount = await this.accountRepository.create(accountData);
    await this.accountRepository.save(newAccount)
    return newAccount;
  }

  async getById(id: number) {
    const account = await this.accountRepository.findOne({where: { id }});
    if (account) {
      return account;
    }
    throw new HttpException('Nem létezik számla ezzel az azonosítóval', HttpStatus.NOT_FOUND);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
