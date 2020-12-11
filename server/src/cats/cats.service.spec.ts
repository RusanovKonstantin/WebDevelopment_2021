import { Test, TestingModule } from '@nestjs/testing';
import { Cat } from './Cat';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create cat', () => {
    const res = service.create({name:"Vasya", age:1});
    expect(res).toEqual({id:0, name:"Vasya", age:1})
  })
});
