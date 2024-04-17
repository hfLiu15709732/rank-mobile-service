import { Module } from '@nestjs/common';
import { SsdController } from './ssd.controller';
import { SsdService } from './ssd.service';

@Module({
  controllers: [SsdController],
  providers: [SsdService],
})
export class SsdModule {}
