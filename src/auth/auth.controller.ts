import { Body, Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService:AuthService){} 
  // instancename:type(or class) of the service being injected
  
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() input: {email:string, password:string}  ){
    // throw new NotImplementedException('Implement this method');

    return this.authService.authenticate(input);
  }

  @UseGuards(AuthGuard) // means this endpoint protected by AuthGuard - can activate will work
  @Get('me') // to allow only authenticated users to access this route
  getUserInfo(@Request() request){  // request object updated in auth guard
    return request.user;
  }

}
