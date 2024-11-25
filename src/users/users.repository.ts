import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/v1/prisma.service";

type findUserByEmail= { userId:string }
@Injectable()
export class UsersRepository {
  constructor(private prismaService: PrismaService) {}
  
  async findUserIdByAuth(authId: string) :Promise<findUserByEmail | undefined> {
        
        const user = await this.prismaService.user.findFirst({
            where:{
                AuthId: authId
            }
        })

        return {
            userId: user.id,
        }
    }
}