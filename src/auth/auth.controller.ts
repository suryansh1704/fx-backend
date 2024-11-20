import { Body, Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

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

}
