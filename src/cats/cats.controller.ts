// cats/cats.controller.ts
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { CreateCatDto } from '../dto/create-cat.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }
}
