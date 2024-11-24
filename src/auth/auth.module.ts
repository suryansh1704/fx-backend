import { Get, Module } from '@nestjs/common';
import { AuthService } from './v1/auth.service';
import { AuthController } from './v1/auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/configs/jwt-secret';
import { AuthRepository } from './v1/auth.repository';

@Module({
  providers: [AuthService , AuthRepository],
  controllers: [AuthController],
  imports:[
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET, 
      signOptions: { expiresIn: '1d' }, //30s 1m 1h 1d 1w 1y
    }),
  ]
})
export class AuthModule {
  
}
