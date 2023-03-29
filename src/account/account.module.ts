/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { OwnerModule } from 'src/owner/owner.module';
import { Owner } from 'src/owner/entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account]), OwnerModule],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
