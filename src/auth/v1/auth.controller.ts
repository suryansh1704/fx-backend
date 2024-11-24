import { Body, Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { ApiBasicAuth, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthDto } from '../dto/Auth.dto';
import { SignupDto } from '../dto/Signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService:AuthService){} 
  // instancename:type(or class) of the service being injected

  @ApiBody({type: AuthDto})
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() input: AuthDto){
    // throw new NotImplementedException('Implement this method');
    return this.authService.authenticate(input);
  }

  @ApiBasicAuth()
  @UseGuards(AuthGuard) // means this endpoint protected by AuthGuard - can activate will work
  @Get('me') // to allow only authenticated users to access this route
  getUserInfo(@Request() request){  // request object updated in auth guard
    return request.user;
  }

  @ApiBody({type: SignupDto})
  @Post('signup')
  async signup(@Body() input: SignupDto){
    return this.authService.signup(input);
  }

}
