/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  controllers: [OwnerController],
  providers: [OwnerService]
})
export class OwnerModule {}
