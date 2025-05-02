import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlProviderModule } from './graphql/graphql-provider.module';

@Module({
  imports: [GraphqlProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
