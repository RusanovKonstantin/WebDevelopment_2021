import { Controller, Get, Post, Query, Body, Param, HttpException, HttpStatus, Put, Delete, HttpCode } from '@nestjs/common';
import { CatDto } from './dto/cat-dto';

@Controller('cats')
export class CatsController {
    cats: CatDto[] =
        [
            {
                id: 1,
                age: 0,
                name: "Dymok",
                color: "grow"
            },
            {
                id: 2,
                age: 2,
                name: "Murka",
                color: "three color"
            }
        ]
    @Get()
    findAll(): CatDto[] {

        return this.cats;
    }
    @Get(':id')
    findOne(@Param() params): CatDto {
        const cat = this.cats.find(cat => cat.id === +params.id);

        if (cat) { return cat }
        throw new HttpException('Not founded', HttpStatus.NOT_FOUND);
    }

    @Post()
    createCat(@Body() cat: CatDto): CatDto {
        const id = this.cats.length + 1;
        cat.id = id;
        this.cats.push(cat);
        return cat;
    }

    @Put()
    UpdateOne(@Body() cat: CatDto): CatDto {
        const foundCat = this.cats.find(item => item.id === cat.id);

        if (foundCat) 
        { 
            this.cats[foundCat.id - 1] = cat;
             return this.cats[foundCat.id - 1] 
        }
        throw new HttpException('Not founded', HttpStatus.NOT_FOUND);
    }

    @Delete(':id')
    @HttpCode(202)
    delete(@Param() parms)
    {
        const lengthBefor = this.cats.length;
        this.cats = this.cats.filter(item => item.id != +parms.id);
        if (lengthBefor === this.cats.length)
        {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND)
        }

    }
}
