import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignUpByEmailInput } from './sign-up-by-email.input';

@Resolver()
export class SignUpByEmailResolver {
  @Mutation(() => Boolean)
  signUpByEmail(@Args('input') input: SignUpByEmailInput): boolean {
    // some logic behind this resolver
    return true;
  }
}
