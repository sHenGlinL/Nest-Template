import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger); // 全局中间件
  // app.useGlobalFilters(new HttpExceptionFilter()); // 全局过滤器
  // app.useGlobalPipes(new ValidationPipe()); // 全局管道
  // app.useGlobalGuards(new RolesGuard()); // 全局守卫
  // app.useGlobalInterceptors(new LoggingInterceptor()); // 全局拦截器
  await app.listen(3000);
}
bootstrap();
