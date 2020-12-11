import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
// import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
  //   GraphQLModule.forRoot({
  //   autoSchemaFile: 'schema.gql',
  // }),
CatsModule],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
