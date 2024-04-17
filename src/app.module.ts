import { Module } from '@nestjs/common';

import { UserModule } from './server/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SsdModule } from './server/ssd/ssd.module';
import { User } from './entity/user.entity';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
