import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLConfigService } from './graphql-config.service';
import { queriesResolvers } from './queries';
import { mutationResolvers } from './mutations';

const providers = [...queriesResolvers, ...mutationResolvers];
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
