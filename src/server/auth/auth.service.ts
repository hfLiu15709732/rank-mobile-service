import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(): Promise<any> {
    const result = { name: 'lhf1807360021' };
    const token = await this.jwtService.signAsync(result);
    console.log('Token生成');

    // TODO: Generate a JWT and return it here
    // instead of the user object
    return token;
  }
}
