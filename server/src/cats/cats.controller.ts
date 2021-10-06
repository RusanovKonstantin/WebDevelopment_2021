import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController 
{
    @Get()
    findAll():string
    {
        return "<b>Hellow Cats</b>";
    }

    @Post()
    createCat():string
    {
        return "Will create cat"
    }
}
