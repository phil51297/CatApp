import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): string {
    return 'List of users';
  }
}
