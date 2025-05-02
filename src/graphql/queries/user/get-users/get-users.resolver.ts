import { Query, Resolver } from '@nestjs/graphql';
import { Author } from '../../../models/user.model';

const users = [
  {
    id: '1',
    email: 'test1@mail.com',
    password: 'qwerty123',
    username: 'test-user1',
  },
  {
    id: '2',
    email: 'test2@mail.com',
    password: 'qwerty123',
    username: 'test-user2',
  },
];

@Resolver()
export class GetUsersResolver {
  @Query(() => [Author])
  getUsers(): Author[] {
    return users;
  }
}
