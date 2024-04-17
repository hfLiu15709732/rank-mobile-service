import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { knife4jSetup } from 'nest-knife4j';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/bpa');
  const options = new DocumentBuilder()
    .setTitle('生活惠对比平台后端文档')
    .setDescription('The rankMobile API description')
    .setVersion('2.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  knife4jSetup(app, [
    {
      name: '2.X版本',
      url: `/api-json`,
      swaggerVersion: '3.0',
      location: `/api-json`,
    },
  ]);
  await app.listen(3000);
}
bootstrap();
