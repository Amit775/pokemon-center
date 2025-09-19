import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnAbilityArgs } from "./args/CreateManyAndReturnAbilityArgs";
import { Ability } from "../../../models/Ability";
import { CreateManyAndReturnAbility } from "../../outputs/CreateManyAndReturnAbility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ability)
export class CreateManyAndReturnAbilityResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAbility], {
    nullable: false
  })
  async createManyAndReturnAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnAbilityArgs): Promise<CreateManyAndReturnAbility[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
