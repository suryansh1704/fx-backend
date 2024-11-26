import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/v1/prisma.service';
import { UsersRepository } from './v1/users.repository';
import { UsersService } from './v1/users.service';

@Module({
  providers: [UsersService , PrismaService , UsersRepository],
  exports:[UsersService],
})
export class UsersModule {}
