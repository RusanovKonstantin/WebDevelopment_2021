import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModule } from '../../src/cats/cats.module';
import { CatsService } from '../../src/cats/cats.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  let catsService = { 
      findAll: () => [{id:0, name:"Vasya", age:1}],
      create: (cat) => {return {id: 0, ...cat}},
    };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET cats`, () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect(catsService.findAll());
  });

  it(`/POST cat`, () => {
    return request(app.getHttpServer())
      .post('/cats')
      .send({name: 'Murzik', age: 2})
      .expect(201, {
        id: 0,
        name: 'Murzik', 
        age: 2
      });
  });


  afterAll(async () => {
    await app.close();
  });
});