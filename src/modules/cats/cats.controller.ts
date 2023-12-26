import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Post,
  Query,
  Redirect,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto, CreateCatDto } from './interface/cats';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
// import { AllExceptionsFilter } from 'src/filter/any-exception.filter';
import { CustomException } from 'src/filter/forbidden.exception';
import { ValidationPipe } from 'src/pipe/validate.pipe';
import { ParseIntPipe } from 'src/pipe/parse-int.pipe';
import { RolesGuard } from 'src/guard/roles.guard';
import { Roles } from 'src/guard/roles.decorator';
import { LoggingInterceptor } from 'src/intercept/logging.interceptor';
import { TransformInterceptor } from 'src/intercept/transform.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
@UseFilters(HttpExceptionFilter)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles('admin')
  // @UseFilters(HttpExceptionFilter)
  async create(@Body(ValidationPipe) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  @Roles('admin')
  @UseInterceptors(TransformInterceptor)
  async findAll(): Promise<CatDto[]> {
    return this.catsService.findAll();
  }

  @Get('error')
  async getError() {
    throw new ForbiddenException();
  }

  @Get('customError')
  async getCustomError() {
    throw new CustomException();
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): CatDto {
    return this.catsService.findOne(id);
  }
}
