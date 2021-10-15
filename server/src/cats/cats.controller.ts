import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('cats')
export class CatsController 
{
    @Get()
    findAll(@Query('a') a: number,@Query('b') b:number):string
    {
        const _a = a ? +a:0;
        const _b=b? +b:0;
        return `<b>Hellow Cats  a+b=${_a + _b}</b>`;
    }

    @Post()
    createCat():string
    {
        return "Will create cat"
    }
}
