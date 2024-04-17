import { Controller, Delete, Get, Put } from '@nestjs/common';
import { SsdService } from './ssd.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('SSD管理')
@Controller('ssd')
export class SsdController {
  constructor(private readonly ssdService: SsdService) {}

  @Get('add/one')
  @ApiOperation({ summary: '数据单一增添' })
  async addOne(): Promise<any> {
    let base = { name: 'weigao' };
    let res = await this.ssdService.addingOne(base);
    console.log(res);

    return { name: '你好啊' };
  }

  @Get('list')
  @ApiOperation({ summary: '列表获取' })
  getSSDInfo(): object {
    return { name: '你好啊' };
  }

  @Get('detail')
  @ApiOperation({ summary: '详情获取' })
  getDetail(): object {
    return { name: '你好啊' };
  }

  @Delete('one')
  @ApiOperation({ summary: '单一删除' })
  deleteOne(): object {
    return { name: '你好啊' };
  }

  @Put('one')
  @ApiOperation({ summary: '单一修改' })
  modifyOne(): object {
    return { name: '你好啊' };
  }
}
