import { Injectable } from '@nestjs/common';
import { Cat } from './Cat';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(reqCat: Cat): Cat{
        const cat: Cat = {id: this.cats.length, ...reqCat};
        this.cats.push(cat);
        return cat;
    }

    findAll(): Cat[]{
        return this.cats;
    }

}
