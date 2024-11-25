import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/v1/prisma.service';
import { UsersRepository } from './users.repository';

export type User = {
    // username: string;
    email: string;
    userId: string;
};

type FindUserId = { userId:string }

// // FIXME: implement actual db 
// const users: User[]=[
//     {
//         // username: 'john',
//         email: 'john@gmail.com',
//         password: 'changeme',
//         userId: 1
//     },
//     {
//         // username: 'chris',
//         email: 'chris@gmail.com',
//         password: 'secret',
//         userId: 2
//     }
// ]

@Injectable()
export class UsersService {
    constructor(private userRepository:UsersRepository) {}
    async findUserIdByAuth(authId:string): Promise<FindUserId | undefined> {

        const user = await this.userRepository.findUserIdByAuth(authId);

        return user;
    }
}
