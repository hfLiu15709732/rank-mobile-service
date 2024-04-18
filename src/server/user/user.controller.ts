import { Body, Controller, Get, Request } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('info')
  @ApiOperation({ summary: '获取用户信息' })
  getUserIngo(@Body() userDto, @Request() req): string {
    console.log(userDto);
    console.log(req.userInfo);

    return '获取成功！';
  }
}
