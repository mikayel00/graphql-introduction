import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignUpByEmailInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  username: string;
}
