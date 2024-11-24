import { Injectable } from "@nestjs/common";
import { SignupDto } from "../dto/signup.dto";

type SignupResult = { userId: number; email: string; };

@Injectable()
export class AuthRepository{
    constructor() {}

    async createUser(input: SignupDto): Promise<SignupResult|undefined> {
        
        return 
    }
}