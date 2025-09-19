import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAbilityOrThrowArgs } from "./args/FindUniqueAbilityOrThrowArgs";
import { Ability } from "../../../models/Ability";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ability)
export class FindUniqueAbilityOrThrowResolver {
  @TypeGraphQL.Query(_returns => Ability, {
    nullable: true
  })
  async getAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAbilityOrThrowArgs): Promise<Ability | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
