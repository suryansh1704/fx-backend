import { Module } from '@nestjs/common';
import { PrismaService } from './v1/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
