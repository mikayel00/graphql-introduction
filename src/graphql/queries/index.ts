import { GetHelloResolver } from './app/get-hello-resolver/get-hello.resolver';
import { GetUsersResolver } from './user/get-users/get-users.resolver';

export const queriesResolvers = [GetHelloResolver, GetUsersResolver];
