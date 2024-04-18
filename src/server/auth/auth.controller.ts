import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { White_Router } from 'src/util/commonDecoration';

@Controller('auth')
@ApiTags('权限认证模块')
export class AuthController {
  constructor(private authService: AuthService) {}

  @White_Router()
  @ApiOperation({ summary: '登录接口（获取token）' })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn() {
    return this.authService.signIn();
  }
}
