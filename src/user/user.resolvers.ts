import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '../graphql.schema';

@Resolver()
export class UserResolver {
  @Query()
  async user(@Args() id: number): Promise<User> {
    console.log(id);
    return { id: '1', name: 'bar' };
  }
}
