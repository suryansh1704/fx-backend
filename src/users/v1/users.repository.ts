import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/v1/prisma.service";
import { AttributesDto } from "../dto/attributes.dto";

import { Prisma } from '@prisma/client';

type findUserByEmail= { userId:string }
@Injectable()
export class UsersRepository {
  constructor(private prismaService: PrismaService) {}
  
  async findUserIdByAuth(authId: string) :Promise<findUserByEmail | undefined> {
        
        const user = await this.prismaService.user.findFirst({
            where:{
                authId: authId
            }
        })

        return {
            userId: user.id,
        }
    }

    async createUserAttributes(input: AttributesDto){
        const user = await this.prismaService.user.findUnique({
            where: {
              id: input.userId, 
            }
          });
      
          if (!user) {
            throw new BadRequestException('User not found');
          }
      
        await this.prismaService.userAttributes.create({
            data:{
                userId: input.userId,
                age: input.age,
                height:input.height,
                weight:input.weight,
                sizeTop: input.sizeTop,
                sizeBottom: input.sizeBottom
            }
        })
        return 'user attributes created';
    }
}