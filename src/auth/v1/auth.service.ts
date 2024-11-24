import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignupDto } from '../dto/signup.dto';
import { AuthRepository } from './auth.repository';


type AuthInput ={ email: string; password: string; };
type AuthData = { userId: number; email: string;};
type AuthResult = { accessToken: any; userId: number;  email: string;};
type SignUpResult = { accessToke:string; userId: number; email: string; };

@Injectable()
export class AuthService {
    constructor(private userService:UsersService, private jwtService:JwtService , private authRepository: AuthRepository ) {}
    
    async validateUser(input:AuthInput) : Promise<AuthData |undefined>{
        // use userService to findUserByUsername & than compare password
        try{
            const user = await this.userService.findUserByUsername(input.email);
            
            if( user &&  user.password === input.password){
                return {
                    userId: user.userId,
                    email: user.email
                };
            }
        }
        catch{
            throw new Error('User not found'); 
        }
    }

    async authenticate(input:AuthInput): Promise<AuthResult> {
        // validate the user and than generate access token
        const user = await this.validateUser(input);
        if(!user){
            throw new UnauthorizedException();
        }

        return this.GenerateToken(user);
    }

    async GenerateToken(user:AuthData): Promise<AuthResult>{
        const tokenPayload = { sub: user.userId, email: user.email};  // here sub is important according to jwt convention
        const accessToken = await this.jwtService.signAsync(tokenPayload);
        
        return {
            accessToken,
            userId: user.userId,
            email: user.email
        };
    }

    async signup(input:SignupDto): Promise<SignUpResult|undefined>{
        // create a new user and than generate access token
        const user = await this.authRepository.createUser(input);


        return 
    }
}