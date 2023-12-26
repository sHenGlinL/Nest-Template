import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { HomeModule } from './modules/home/home.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
// import { CatsController } from './modules/cats/cats.controller';

@Module({
  imports: [HomeModule, CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        // { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
    // .forRoutes(CatsController); // 不生效？
  }
}
