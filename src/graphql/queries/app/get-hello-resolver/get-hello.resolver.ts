import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class GetHelloResolver {
  @Query(() => String)
  getHello(): string {
    return 'Hello from Backend GraphQL!';
  }
}
