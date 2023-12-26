import { HttpException, HttpStatus } from '@nestjs/common';

// 自定义异常
export class CustomException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
