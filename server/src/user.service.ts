import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateAccountDto } from 'model/user.model';

@Injectable()
export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: CreateAccountDto) {
    return this.prisma.accounts.create({
      data,
    });
  }
}
