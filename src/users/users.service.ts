import { Injectable } from '@nestjs/common';

export type User = {
    // username: string;
    email: string;
    password: string;
    userId: number;
};

// FIXME: implement actual db 
const users: User[]=[
    {
        // username: 'john',
        email: 'john@gmail.com',
        password: 'changeme',
        userId: 1
    },
    {
        // username: 'chris',
        email: 'chris@gmail.com',
        password: 'secret',
        userId: 2
    }
]

@Injectable()
export class UsersService {
    async findUserByUsername(email: string): Promise<User | undefined> {
        // FIXME:prisma query
        return users.find(user=>user.email===email);
        
    }
}
