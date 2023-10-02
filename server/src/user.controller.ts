import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountDto } from 'model/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() userData: CreateAccountDto) {
    return this.userService.createUser(userData);
  }
}
