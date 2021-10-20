import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CatDto } from './dto/cat-dto';

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
    createCat(@Body() cat: CatDto):CatDto
    {
        console.log(cat);
        console.log(cat.age +1);
        return cat;
    }
}
