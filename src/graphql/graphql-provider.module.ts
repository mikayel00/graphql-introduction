import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLConfigService } from './graphql-config.service';
import { queriesResolvers } from './queries';

const providers = [...queriesResolvers];
@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphQLConfigService,
    }),
  ],
  providers: providers,
})
export class GraphqlProviderModule {}
