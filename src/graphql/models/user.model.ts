import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field(() => String)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  username: string;
}
