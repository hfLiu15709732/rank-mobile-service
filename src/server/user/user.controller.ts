import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  @ApiOperation({ summary: '用户登录' })
  async pushLogin(): Promise<any> {
    let res = await this.userService.addingOne({ name: '你好啊' });
    console.log(res);

    return '登陆成功！';
  }

  @Get('info')
  getUserIngo(): string {
    return '获取成功！';
  }
}
