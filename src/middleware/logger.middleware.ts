import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('路由中间件：Request...');
    next();
  }
}

// 函数式中间件
export function logger(req, res, next) {
  console.log(`全局中间件：Request...`);
  next();
}
