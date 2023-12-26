import { Injectable } from '@nestjs/common';
import { CatDto, CreateCatDto } from './interface/cats';

@Injectable()
export class CatsService {
  private readonly cats: CatDto[] = [];

  create(cat: CreateCatDto) {
    this.cats.push(cat);
  }

  findAll(): CatDto[] {
    return this.cats;
  }

  findOne(id: number): CatDto {
    return this.cats.find((item) => item.id === id);
  }
}
