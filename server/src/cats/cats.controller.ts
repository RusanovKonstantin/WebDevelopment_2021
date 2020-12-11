import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cat } from './Cat';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}


    @Post()
    async create(@Body() catDto: Cat): Promise<Cat>{
        return this.catsService.create(catDto);
    }

    @Get()
    async getAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

}
