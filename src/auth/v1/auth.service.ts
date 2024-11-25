import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignupDto } from '../dto/signup.dto';
import { AuthRepository } from './auth.repository';
import { AuthDto } from '../dto/Auth.dto';

type AuthData = { authId: string; email: string };
type AuthResult = { accessToken: any; userId: string; email: string };
type SignUpResult = { accessToke: string; userId: string; email: string };

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private authRepository: AuthRepository,
  ) {}

  async validateUser(input: AuthDto): Promise<AuthData | undefined> {
    const user = await this.authRepository.findUserAuthByEmail(input.email); 

    if (user && user.password === input.password) {
      return {
        authId: user.authId,
        email: user.email,
      };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async authenticate(input: AuthDto): Promise<AuthResult | undefined> {
    const userAuth = await this.validateUser(input);

    const token = this.GenerateToken(userAuth);

    const userId = await this.userService.findUserIdByAuth(userAuth.authId);

    return {
      accessToken: token,
      userId: userId.userId,
      email: input.email,
    };
  }

  async GenerateToken(user: AuthData): Promise<{ accessToken: string }> {
    const tokenPayload = { sub: user.authId, email: user.email }; // here sub is important according to jwt convention
    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return { accessToken };
  }

  async signup(input: SignupDto): Promise<SignUpResult | undefined> {
    // create a new user and than generate access token
    const user = await this.authRepository.createUser(input);

    return;
  }
}
