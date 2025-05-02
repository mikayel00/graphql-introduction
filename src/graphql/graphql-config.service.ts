import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriverConfig, ApolloDriverConfigFactory } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class GraphQLConfigService implements ApolloDriverConfigFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src', 'generated-schema.gql'),
      playground: false,
      sortSchema: true,
      introspection: true,
    };
  }
}
