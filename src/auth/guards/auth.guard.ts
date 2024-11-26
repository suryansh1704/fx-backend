// makesure's Bearer <tokenisvalidornot> and add's user details in request global object  // this user details are extracted from bearer token // maybe role of sub ata hoga ## decoding/decryption 
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private jwtService:JwtService){}

  async canActivate(context: ExecutionContext){
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;
    // extract token from "Bearer <token>"
    const token = authorization?.split(' ')[1];
    if(!token){
      throw new UnauthorizedException();
    }

    //now check validity of token
    try{
      const tokenPayload = await this.jwtService.verifyAsync(token);
      request.user ={
        userId:tokenPayload.sub,
        email:tokenPayload.email
      }
      return true;
    }catch(error){
      throw new UnauthorizedException();
    }
  }
}
