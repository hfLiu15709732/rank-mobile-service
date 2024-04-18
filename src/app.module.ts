import { Module } from '@nestjs/common';

import { UserModule } from './server/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SsdModule } from './server/ssd/ssd.module';
import { User } from './entity/user.entity';
import { ManufacturerModule } from './server/manufacturer/manufacturer.module';
import { AuthModule } from './server/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '111',
      database: 'react_blog',
      entities: [User],
      synchronize: true,
    }),

    UserModule,
    SsdModule,
    ManufacturerModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
