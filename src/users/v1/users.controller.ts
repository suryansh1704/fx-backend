import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiAcceptedResponse, ApiBody } from "@nestjs/swagger";
import { AttributesDto } from "../dto/attributes.dto";

@Controller('users')
export class UsersController{
    constructor(private userService:UsersService){}

    @ApiBody({type:AttributesDto})
    @ApiAcceptedResponse({description:'User attributes created'})
    @Post('attributes')
    async CreateUserAttributes(@Body() input:AttributesDto){
        console.log('input',input);
        return this.userService.createUserAttributes(input);
    }

}