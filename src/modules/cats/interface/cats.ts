import { IsString, IsInt } from 'class-validator';

export interface CatDto {
  id?: number;
  name: string;
  age: number;
  breed: string;
}

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
