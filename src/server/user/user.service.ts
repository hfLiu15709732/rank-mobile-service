import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async addingOne(params: any): Promise<any> {
    console.log(params);
    let res = await this.usersRepository.find();
    console.log(res);

    return { name: 'hhahahha' };
  }
}
